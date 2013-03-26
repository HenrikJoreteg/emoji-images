// quick/dirty script to scrape the emoji data and write them to JSON files for consumption elsewhere.
// props to hassankhan for doing the work of converting these to data uris.
var request = require('request'),
    async = require('async'),
    fs = require('fs');

var urls = [
    'https://raw.github.com/hassankhan/emojify.js/master/less/emojify.emoticons.less',
    'https://raw.github.com/hassankhan/emojify.js/master/less/emojify.nature.less',
    'https://raw.github.com/hassankhan/emojify.js/master/less/emojify.objects.less',
    'https://raw.github.com/hassankhan/emojify.js/master/less/emojify.people.less',
    'https://raw.github.com/hassankhan/emojify.js/master/less/emojify.places.less',
    'https://raw.github.com/hassankhan/emojify.js/master/less/emojify.symbols.less'
];

async.each(urls, function (url, loopCb) {
    var results = {};
    request.get(url, function (err, res, body) {
        var split = body.split('\n');
        split.forEach(function (text) {
            if (!text) return;
            var text = String(text).slice(9),
                name = text.match(/^\S+/)[0];

            text = text.match(/url\((\S+)\)/)[0];
            results[name] = text.slice(4, -1);
        });
        fs.writeFileSync('json/' + url.slice(65, -5) + '.json', JSON.stringify(results, null, 2));
        loopCb();
    });
});
