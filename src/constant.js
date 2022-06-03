const WARP_SYMBOL = /[\\n|\\r\\n]/;

const HEADER = {
  REGEXP_HEADER: /(^#{1,6}\s).*/,
  REGEXP_EMPTY_HEADER: /^(#{1,6}\s+)/,
  REGEXP_H1: /^(#{1}\s).*/,
  REGEXP_H2: /^(#{2}\s).*/,
  REGEXP_H3: /^(#{3}\s).*/,
  REGEXP_H4: /^(#{4}\s).*/,
  REGEXP_H5: /^(#{5}\s).*/,
  REGEXP_H6: /^(#{6}\s).*/
};

const LIST = {
  REGEXP_ORDERED_LIST: /^(\d\.\s).*/,
  REGEXP_UNORDERED_LIST: /^(\-\s).*/,
  REGEXP_EMPTY_ORDERED_LIST: /^(\d\.\s+)/,
  REGEXP_EMPTY_UNORDERED_LIST: /^(\-\s+)/,
  REGEXP_TASK_LIST: /^(\- \[[x]?\])/,
  REGEXP_FINISHED_TASK_LIST: /^(\- \[\])/,
  REGEXP_UNFINISHED_TASK_LIST: /^(\- \[x\])/
};

const CODE = {
  REGEXP_CODE_BLOCK: /^(`{3})(.*\\n)\1/,
  REGEXP_INLINE_CODE: /(`)(.*\\n)\1/
  // REGEXP_CODE_LANGUAGE: /xx/,
};

// const REGEXP_MATH_BLOCK = //
// const REGEXP_TABLE = //
// const REGEXP_HORIZONTAL_LINE = //
const REGEXP_LINK = /\[.*\]\(.+\)/;
const REGEXP_IMAGE = /!\[.*\]\(.*\)/;
const REGEXP_ITALIC = /(\*)(.+?)\1/;
const REGEXP_BLOD = /(\*{2})(.+?)\1/;
const REGEXP_HEIGHTLIGHT = /(\={2})(.*)\1/;

export default {
  ...HEADER,
  ...LIST,
  ...CODE,
  REGEXP_LINK,
  REGEXP_IMAGE,
  REGEXP_ITALIC,
  REGEXP_BLOD,
  REGEXP_HEIGHTLIGHT
};
