import Container from '@teqfw/di';
import {dirname} from 'path';

// compose current path
const url = new URL(import.meta.url);
const current = dirname(url.pathname);

// setup DI container
const container = new Container();
container.addSourceMapping('Demo', current, true);
container.set('settings', {db: {name: 'work'}});

// get instance of custom service from DI container
/** @type {Demo_MyCustomService} */
const custom = await container.get('Demo_MyCustomService$');

// use instance
const dbName = custom.settings.db.name;
const user = custom.user.name;
const group = custom.group.name;
console.log(`${dbName} / ${user} / ${group}`);

