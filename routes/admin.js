const {Router} = require("express");
const router = Router();
const AdminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const {jwtpass} = require('../config');
const { Admin, Course } = require("../db/index");

router.post("/signup", async (req, res) => {

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
                message: "admin created successfully"
            })
        }
        else{
            res.json({
                message: "the admin already exists"
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
router.post("/create", AdminMiddleware, (req, res)=>{

});
router.get("/courses", AdminMiddleware, (req, res)=>{

});


module.exports = router;