// universal module definition: https://github.com/umdjs/umd/blob/master/returnExports.js#L41
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {
    var emojis = {{data}},
        test = /\:[a-z0-9_\-\+]+\:/g;

    function emoji(someString, url, size) {
        return someString.replace(test, function (match) {
            if (emojis.indexOf(match) !== -1) {
                var name = String(match).slice(1, -1);
                return '<img class="emoji" title=":' + name + ':" alt="' + name + '" src="' + url + '/' + encodeURIComponent(name) + '.png"' + (size ? (' height="' + size + '"') : '') + ' />';
            } else {
                return match;
            }
        });
    };

    return emoji;
}));
