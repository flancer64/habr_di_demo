/**
 * Create function that uses other functions.
 *
 * @namespace Demo_Other_Card
 */

/**
 * This factory function is called 'Builder' but does the same as 'Demo_Root.Factory' does - loads deps and returns
 * new function that uses these deps.
 *
 * @return Demo_Other_Card.fnCard
 * @memberOf Demo_Other_Card
 */
export function Builder(spec) {
    /** @type {Function|Demo_Stuff_Lib.composeInfo} */
    const info = spec['Demo_Stuff_Lib#composeInfo'];
    /** @type {Function|Demo_Stuff_Lib.getFirstName} */
    const first = spec['Demo_Stuff_Lib#getFirstName'];
    /** @type {Function|Demo_Stuff_Lib.getLastName} */
    const second = spec['Demo_Stuff_Lib#getLastName'];
    /** @type {Function|Demo_Stuff_Lib.getRank} */
    const rank = spec['Demo_Stuff_Lib#getRank'];

    /**
     * This function is result of default export run, it's depId is 'Demo_Other_Card$' (for singleton).
     * @param {Object} data
     * @memberOf Demo_Other_Card
     */
    function fnCard(data) {
        return info(first(data), second(data), rank(data));
    }

    return fnCard;
}
