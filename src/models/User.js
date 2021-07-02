'use strict';

const UserStorage = require("./UserStorage");

class User  {
    constructor(body) {
        this.body = body;

    }
    
    login() {
        const body = this.body
        const {id, psword} = UserStorage.getUserInfo(body.id);

        if (id){
            if ( id === body.id && psword === body.psword){
                return{success : true, msg : " 정상"};
        }
        return{success : false, msg : "비밀번호 오류"};
    }
    return {success : false , msg: "존재하지않는 ID"};
    }
}

module.exports = User;