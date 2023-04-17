const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
//   let result = {}
//   let domainsSort = domains.map((item) => item.slice(item.indexOf('.'))).sort((a, b) => a.lingth - b.lingth);
//  for (let i = 0; i < domainsSort.length; i++) {
//   counter = 0;
//    for(let j = i; j < domainsSort.length; j++) {
//        counter += domainsSort[j].match(new RegExp(`${domainsSort[i]}`)).length;
//    }
//    result[domainsSort[i]] = counter;
//  }
//  return result;

// }
throw new NotImplementedError('Not implemented');
}
module.exports = {
  getDNSStats,
};
