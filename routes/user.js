const {Router} = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const {jwtpass} = require('../config');
const UserMiddleware = require("../middleware/user");
const {User, Course} = require("../db");

router.post("/signup", async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{
        const exists = await User.findOne({username});
        if(!exists){
            await User.create({
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
router.get("/courses", (req, res)=>{

});
router.post("/courses/:courseId", UserMiddleware, (req, res)=>{

});
router.get("/purchasedCourses", UserMiddleware, (req, res)=>{

});

module.exports = router;