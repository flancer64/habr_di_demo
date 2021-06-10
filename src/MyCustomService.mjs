export default class Demo_MyCustomService {
    /** @type {Demo_GroupService} */
    group;
    settings;
    /** @type {Demo_UserService} */
    user;

    constructor({settings, Demo_UserService$, Demo_GroupService$}) {
        this.settings = settings;
        this.group = Demo_GroupService$;
        this.user = Demo_UserService$;
    }
}
