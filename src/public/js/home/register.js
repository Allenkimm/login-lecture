"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
        
   };
   console.log(req);
   

//    fetch("/register", {
//        method:"POST",
//        headers: {
//            "Content-Type": "application/json",
//        },
//        body: JSON.stringify(req),
//    })
//     .then((res) => res.json())
//     .then((res)=> {
//         console.log(res);
//         if (res.success) {
//             location.href= "/";
//         }   else{
//             alert(res.msg);
//         }
//     })
//     .catch((err) => {
//         console.error("로그인 중 에러 발생");
//     });
}


