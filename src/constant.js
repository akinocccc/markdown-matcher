const WARP_SYMBOL = /[\\n|\\r\\n]/;

const HEADER = {
  HEADER: /(^#{1,6}\s).*/,
  EMPTY_HEADER: /^(#{1,6}\s+)/,
  H1: /^(#{1}\s).*/,
  H2: /^(#{2}\s).*/,
  H3: /^(#{3}\s).*/,
  H4: /^(#{4}\s).*/,
  H5: /^(#{5}\s).*/,
  H6: /^(#{6}\s).*/
};

const LIST = {
  ORDERED_LIST: /^(\d\.\s).*/,
  UNORDERED_LIST: /^(\-\s).*/,
  EMPTY_ORDERED_LIST: /^(\d\.\s+)/,
  EMPTY_UNORDERED_LIST: /^(\-\s+)/,
  TASK_LIST: /^(\- \[[x]?\])/,
  FINISHED_TASK_LIST: /^(\- \[\])/,
  UNFINISHED_TASK_LIST: /^(\- \[x\])/
};

const CODE = {
  CODE_BLOCK: /^(`{3})(.*\\n)\1/,
  INLINE_CODE: /(`)(.*\\n)\1/
  // CODE_LANGUAGE: /xx/,
};

// const MATH_BLOCK = //
// const TABLE = //
// const HORIZONTAL_LINE = //
const LINK = /\[.*\]\(.+\)/;
const IMAGE = /!\[.*\]\(.*\)/;
const ITALIC = /(\*)(.+?)\1/;
const BLOD = /(\*{2})(.+?)\1/;
const HEIGHTLIGHT = /(\={2})(.*)\1/;

export default {
  ...HEADER,
  ...LIST,
  ...CODE,
  ...LINK,
  ...IMAGE,
  ...ITALIC,
  ...BLOD,
  ...HEIGHTLIGHT
};
