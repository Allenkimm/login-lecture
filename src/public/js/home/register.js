"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert("아이디 입력하시오");
    if (psword.value !== confirmPsword.value) return alert("비밀번호 불일치");
    

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };
   
   

   fetch("/register", {
       method:"POST",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify(req),
   })
    .then((res) => res.json())
    .then((res)=> {
        console.log(res);
        if (res.success) {
            location.href= "/login";
        }   else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}




