/**
 * Avoid dividing unitless zero into CSS calc()
 * @param {string} space
 * @returns entry space value or 0px
 *
 */
const selectSpace = (space) => (space === '0' ? '0px' : space);

export default selectSpace;
