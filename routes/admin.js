const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {jwtpass} = require('../config');
const {adminMiddleware} = require("../middleware/admin");
const {Admin, Course} = require('../db/index');

router.post("/signup", async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{
        const exists = await Admin.findOne({username});
        if(!exists){
            await Admin.create({
                username,
                password
            });
            res.json({
                message: "user created successfully"
            })
        }
        else{
            res.json({
                message: "the user already exists"
            })
        }

    }
    catch(e){
        res.json({
            message: "OOPS an Error occurred !"
        })
    }
});

router.post("/login", (req, res)=>{

});
router.post("/create", adminMiddleware, (req, res)=>{

});
router.get("/courses", adminMiddleware, (req, res)=>{

});


module.exports = adminRouter;