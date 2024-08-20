const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {jwtpass} = require('../config');
const {userMiddleware} = require("../middleware/user");
const {User, Course} = require('../db/index');

router.post("/signup", (req, res)=>{
    
});
router.post("/login", (req, res)=>{

});
router.get("/courses", (req, res)=>{

});
router.post("/courses/:courseId", (req, res)=>{

});
router.get("/purchasedCourses", (req, res)=>{

});

module.exports = userRouter;
