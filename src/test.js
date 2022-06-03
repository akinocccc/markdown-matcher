const REGEXP = require('./constant');

const str = `## 123\\n`;
console.log(REGEXP);
console.log(str.match(REGEXP.REG_HEADER));
