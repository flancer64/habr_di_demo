/**
 * Library of simple functions.
 *
 * @namespace Demo_Stuff_Lib - namespace for all nested functions
 */

/**
 * DepId: 'Demo_Stuff_Lib#composeInfo'
 *
 * @param {string} first
 * @param {string} last
 * @param {string} rank
 * @return {string}
 * @memberOf Demo_Stuff_Lib
 */
export function composeInfo(first, last, rank) {
    return `${first} ${last} (${rank})`;
}

/**
 * DepId: 'Demo_Stuff_Lib#getFirstName'
 *
 * @param {Object} data
 * @return {string}
 * @memberOf Demo_Stuff_Lib
 */
export function getFirstName(data) {
    return data.first ?? 'John';
}

/**
 * DepId: 'Demo_Stuff_Lib#getLastName'
 *
 * @param {Object} data
 * @return {string}
 * @memberOf Demo_Stuff_Lib
 */
export function getLastName(data) {
    return data.last ?? 'Doe';
}

/**
 * DepId: 'Demo_Stuff_Lib#getRank'
 *
 * @param {Object} data
 * @return {string}
 * @memberOf Demo_Stuff_Lib
 */
export function getRank(data) {
    return data.rank ?? 'private';
}
