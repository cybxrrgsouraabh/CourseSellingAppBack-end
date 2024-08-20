const {jwtpass}  = require("../config");
const jwt = require("jsonwebtoken");

function UserMiddleware(req, res, next){
    
    const jwtToken = req.headers.authorization;
    const splitToken = jwtToken.split(" ");
    const token = splitToken[1];
    const verified = jwt.verify(token, jwtpass);
    if(verified.username){
        req.username = verified.username;
        next();
    }
    else{
        res.json({
            message: "invalid authentication"
        });
    }
    
}

module.exports = UserMiddleware;
