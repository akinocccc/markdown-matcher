/**
 * @name akino
 * @param {string} srcString default ''
 * @param {RegExp} pattern default null
 * @param {string} flags default ''
 * @param {string} replaceValue default ''
 * @return {void}
 */
export const replace = (
  srcString = '',
  pattern = null,
  flags = '',
  replaceValue = ''
) => {
  const reg = new RegExp(pattern.source, flags);
  srcString.replace(reg, replaceValue);
};
