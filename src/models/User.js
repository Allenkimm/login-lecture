'use strict';

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User  {
    constructor(body) {
        this.body = body;

    }
    
    async login() {
        const client = this.body;
        const {id,psword} = await UserStorage.getUserInfo(client.id);

        if (id){
            if ( id === client.id && psword === client.psword){
                return{success : true, msg : " 정상"};
        }
        return{success : false, msg : "비밀번호 오류"};
    }
    return {success : false , msg: "존재하지않는 ID"};
}


    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
    

}

module.exports = User;