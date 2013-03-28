var emojis = {{data}},
    test = /\:[a-z0-9_\-]+\:/g;

function template(name) {
    var name = String(name).slice(1, -1);
    return ['<img class="emoji" title=":', name, ':" alt="', name, '" src="https://andbang-emoji.s3.amazonaws.com/', encodeURIComponent(name), '.png"/>'].join('');
}

function emoji(someString) {
    return someString.replace(test, function (match) {
        if (emojis.indexOf(match) !== -1) {
            return template(match);
        } else {
            return match;
        }
    });
};

module.exports = emoji;
