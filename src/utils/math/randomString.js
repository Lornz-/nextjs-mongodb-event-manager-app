/**
 * @param {number} [length=10]
 * @pram {string} [allowed='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789']
 * @return {string}
 */
export default function randomString(
  length = 10,
  allowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
) {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += allowed.charAt(Math.floor(Math.random() * allowed.length));
  }
  return result;
}
