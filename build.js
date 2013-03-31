var fs = require('fs'),
    template = fs.readFileSync(__dirname + '/template.js').toString(),
    types = [
        'emoticons',
        'nature',
        'objects',
        'people',
        'places',
        'symbols'
    ],
    all = [];

types.forEach(function (type) {
    var object = JSON.parse(fs.readFileSync('json/' + type + '.json').toString());
    all = all.concat(Object.keys(object));
});

all.forEach(function (item, index) {
    all[index] = ':' + all[index] + ':';
});

fs.writeFileSync('emoji-images.js', template.replace("{{data}}", JSON.stringify(all)), 'utf-8');
