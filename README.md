## Install

```shell
npm i markdown-matcher --save
```

## Usage

### regexp constant

you can import the regular expression from `markdown-matcher` for other purposes.

```js
import { HEADER, H1, H2, LINK } from 'markdown-matcher';
```

### match

```js
import { H1, match } from 'markdown-matcher';
const str = '# header1 \n 1234';
match(str, 'h1'); // => # header1
```

### hasHeader

Determine if header exists.

```js
import { hasHeader } from 'markdown-matcher';
const str = '# header1 \n 1234';
hasHeader(str, 'header'); // => true
hasHeader(str, 'h1'); // => true
hasHeader(str, 'h2'); // => false
```

### hasLink

Determine if link exists.

```js
import { hasLink } from 'markdown-matcher';
const str = '[](http://abc.com) \n 1234';
hasLink(str); // => true
```

### hasCodeBlock

Determine if code block exists.

````js
import { hasCodeBlock } from 'markdown-matcher';
const str = '```js var a = 1``` \n 1234';
hasCodeBlock(str); // => true
````

### more

`hasImage`, `hasItalic`, `hasBold`, `hasHeightLight`
