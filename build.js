var args = process.argv.slice(2),
    fs = require('fs');

if (args.length === 0) {
    args = ['emoticons', 'people'];
}

var results = {},
    template = fs.readFileSync(__dirname + '/template.js').toString();

args.forEach(function (item) {
    var data = JSON.parse(fs.readFileSync(__dirname + '/json/' + item + '.json').toString());
    for (var key in data) {
        results[key] = data[key];
    }
});

var string = JSON.stringify(results, null, 4);

string = string.replace(/"(\S+)":/, "$&");

fs.writeFileSync('inline-emoji.js', template.replace("{{data}}", string), 'utf-8');
