'use strict';

export class Password {
    constructor(title, email, description, password) {
        this.title = title;
        this.email = email;
        this.description = description;
        this.password = password;
    }

    get title() {
        return this.title;
    }
    get email() {
        return this.email;
    }
    get description() {
        return this.description;
    }
    get password() {
        return this.password;
    }
}