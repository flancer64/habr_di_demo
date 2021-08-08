/**
 * This es6-module contains factory that gets all deps and create root function.
 *
 * @namespace Demo_Root - namespace for all nested functions
 */

/**
 * Factory function, returns root function as result of launch.
 * The Factory is default export, it's depId is 'Demo_Root#'.
 * DepId for result of launch (fnRoot): 'Demo_Root$' (singleton), 'Demo_Root$$' (new result)
 *
 * @return Demo_Root.fnRoot
 * @memberOf Demo_Root
 */
export default function Factory(spec) {
    /** @type {Function|Demo_Other_Card.fnCard} */
    const card = spec['Demo_Other_Card#Builder$']; // trailing '$' means we need factory's result, not factory itself

    /**
     * Root function to process input data.
     *
     * @memberOf Demo_Root
     */
    function fnRoot(data) {
        console.log(card(data));
    }

    return fnRoot;
}
