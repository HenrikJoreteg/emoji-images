var args = process.argv.slice(2),
    fs = require('fs');

if (args.length === 0) {
    args = ['emoticons', 'nature', 'objects', 'people', 'places', 'symbols'];
}

var results = {};

args.forEach(function (item) {
    var data = JSON.parse(fs.readFileSync(__dirname + '/json/' + item + '.json').toString());
    for (var key in data) {
        results[key] = data[key];
    }
});

for (var item in results) {
    fs.writeFileSync('pngs/' + item + '.png', results[item], 'base64');
}
