"use strict";


const User = require("../../models/User");


const output = {
    home: (req, res)=> {
        res.render("home/index");
    },
    login:  (req,res) => {
        res.render("home/login");
    },
    register: (req,res) => {
        res.render("home/register");
    }
};



const process = {
    login: (req, res) => {
       const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    
   
    // const users = new UserStorage();
    // users.getUsers()

        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {
        //         response.success  = true;
        //         return res.json(response);
                    
        //     }
            
        // }
        
        
        // response.success = false;
        // response.msg = "로그인에 실패"
        // return res.json(response);

        
    }
}

module.exports = {
   output,
   process,
}




