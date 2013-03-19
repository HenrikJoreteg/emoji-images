(function () {
var emojis = {{data}};

    function template(name, image) {
        return ['<img class="emoji" alt="', name, '" src="data:image/png;base64,', image, '/>'].join('');
    }

    function emoji(text, options) {
        var i = 0,
            l = emoticons.length,
            item,
            width = options.size || 30;
        for (; i < l; i++) {
            item = emoticons[i];
            text = text.replace(item[0], template(item[1], item[2]));
        }
        return text;
    };

    module.exports = emoji;
}());
