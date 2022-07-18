import constant from './constant';

/**
 * @name akino
 * @param {string} srcString default ''
 * @param {RegExp} pattern default null
 * @param {string} flags default ''
 * @param {string} replaceValue default ''
 * @return {void}
 */
const replace = (
  srcString = '',
  pattern = '',
  flags = '',
  replaceValue = ''
) => {
  const reg = new RegExp(constant[pattern.toLocaleUpperCase()].source, flags);
  srcString.replace(reg, replaceValue);
};

const match = (srcString = '', pattern = '', flags = '') => {
  const reg = new RegExp(constant[pattern.toLocaleUpperCase()].source, flags);
  srcString.match(reg, replaceValue);
};

const hasHeader = (srcString = '', pattern = 'header') => {
  const reg = new RegExp(constant.HEADER.source, 'g');
  return srcString.search(reg) === -1 ? false : true;
};

const hasLink = (srcString = '') => {
  const reg = new RegExp(constant.LINK.source, 'g');
  return srcString.search(reg) === -1 ? false : true;
};

const hasCodeBlock = (srcString = '') => {
  const reg = new RegExp(constant.CODE_BLOCK.source, 'g');
  return srcString.search(reg) === -1 ? false : true;
};

const hasImage = (srcString = '') => {
  const reg = new RegExp(constant.IMAGE.source, 'g');
  return srcString.search(reg) === -1 ? false : true;
};

const hasItalic = (srcString = '') => {
  const reg = new RegExp(constant.ITALIC.source, 'g');
  return srcString.search(reg) === -1 ? false : true;
};

const hasBold = (srcString = '') => {
  const reg = new RegExp(constant.BLOD.source, 'g');
  return srcString.search(reg) === -1 ? false : true;
};

const hasHeightLight = (srcString = '') => {
  const reg = new RegExp(constant.HEIGHTLIGHT.source, 'g');
  return srcString.search(reg) === -1 ? false : true;
};

export default {
  replace,
  match,
  hasHeader,
  hasBold,
  hasCodeBlock,
  hasHeightLight,
  hasImage,
  hasItalic,
  hasLink
};
