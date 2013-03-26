#emoji.js

Because sometimes you want to send a :heart: to someone.

## What is this?

Not entirely sure yet. Takes text, replaces all the texts here: http://www.emoji-cheat-sheet.com with an `<img>` tag with the image.

## Why not just use https://github.com/hassankhan/emojify.js?

I want it all in as super simple text processing (without the CSS and DOM stuff).

Also, that solution embeds pngs as data-uri's in css documents. I don't want to do that because then I have to send all that image data to the browser even if they never get used.

## Is it ready to use?

Um... works for me™

## License

MIT
