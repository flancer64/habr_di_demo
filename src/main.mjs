import Container from '@teqfw/di';
import {dirname} from 'path';

// compose current path
const url = new URL(import.meta.url);
const current = dirname(url.pathname);

// setup DI container
const container = new Container();
container.addSourceMapping('Demo', current, true);

// get result of default export launch as singleton from DI container
/** @type {Function|Demo_Root.fnRoot} */
const root = await container.get('Demo_Root$');
// run 'Demo_Root.fnRoot' with some payload
root({first: 'Alex', last: 'Gusev'});

