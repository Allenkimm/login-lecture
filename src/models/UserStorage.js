"use strict";


class UserStorage {
    static #users ={
        id: ["kim", "lee", "park"],
        psword: ["1234", "1234", "12345"],
        name: ["김광","돌쇠","푸틴"],
    };
    
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
