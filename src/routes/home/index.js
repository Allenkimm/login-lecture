"use strict";

const express = require("express");
const router = express.Router();

// 컨트롤러 지정
const ctrl = require("./home.ctrl");


router.get("/", ctrl.main );
router.get("/login", ctrl.login );


module.exports = router;