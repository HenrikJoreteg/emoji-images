#emoji-images.js

Because sometimes you want to send a :heart: to someone.


## What is this?

Takes text, replaces all the texts here: http://www.emoji-cheat-sheet.com with an `<img>` tag containing the image.

The images are all in the [](pngs) folder. Host those somewhere, pass the URL to the function. See below:


## How to use it

```js

var string = 'a string containing emoji strings like :heart: and :trollface:';

// the emoji function takes:
// 1. The input string
// 2. The url where the png files live
// 3. (optionally) a size to specify as the height of the <img> tag.
var emojified = emoji(string, 'http://url.com/where-you-put-the-pngs-folder/', 30); 

```

It's bundled to work as a CommonJS module, AMD module or expose itself as a global as a fallback.

## install

Grab it here or on npm:

```
npm install emoji-images
```

## Why not just use https://github.com/hassankhan/emojify.js?

I want it all in a super simple text processing (without the CSS and DOM stuff).

Also, that solution embeds pngs as data-uri's in css documents. I don't want to do that because then I have to send all that image data to the browser even if they never get used.


## Is it ready to use?

Um... works for me™  (and in use on andbang.com)


## License

MIT
