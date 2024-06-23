'use strict';

export class User {
    constructor(name, email, passwordMaster, cpf, phone) {
        this.name = name;
        this.email = email;
        this.passwordMaster = passwordMaster;
        this.cpf = cpf;
        this.phone = phone;
    }

    userInfo() {
        return {
            name: this.name,
            email: this.email,
            passwordMaster: this.passwordMaster,
            cpf: this.cpf,
            phone: this.phone
        };
    }
}