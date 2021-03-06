"use strict";


const express = require("express");
const app = express();




// 라우팅
const home = require("./src/routes/home");


// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
//js 폴더에 접근하기위해 등록하는 미들웨어
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded());

app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드.


module.exports = app;