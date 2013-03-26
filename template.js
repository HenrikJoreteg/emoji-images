var emojis = {{data}},
    test = /\:[a-z_]+\:/g;

function template(name) {
    var name = name.slice(1, -1);
    return ['<img class="emoji" alt="', name, '" src="https://andbang-emoji.s3.amazonaws.com/', name, '.png"/>'].join('');
}

function emoji(someString) {
    return someString.replace(test, function (match) {
        if (all.indexOf(match) !== -1) {
            return template(match);
        } else {
            return match;
        }
    });
};

module.exports = emoji;
