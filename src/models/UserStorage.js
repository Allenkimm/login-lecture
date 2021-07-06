"use strict";

const fs = require("fs").promises;

class UserStorage {
    static getUsers(...fields) {
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data)=> {
                return this.#getUserInfo(data, id);
            
        })
        .catch(console.error);
    }
       // 가독성 좋게 사용하기위해 은닉화를 진행함
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //-> [id, psword, name]
        const userInfo = userKeys.reduce((newUser, info ) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;

    }    


    static save(userInfo) {
      users.id.push(userInfo.id);
      users.name.push(userInfo.name);
      users.psword.push(userInfo.psword);
      return { success : true };
      
    }
};


module.exports = UserStorage;