const jwt = require("jsonwebtoken");
const { User } = require("../db.js")

async function userAuth(req, res, next) {

    try {
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token);
        if (!token) return res.status(403).json({
            message: "Access Denied"
        });

        console.log(token);
        const {userId} =  jwt.verify(token, process.env.JWT_SECRET);
        
        console.log(userId);
        
        const isValid = await User.findOne({
            _id : userId
        })

        if(!isValid){
            return res.status(400).json({

                message : "this user does not exist"

            })
        }
        next();


    } catch (err) {

        console.log(err.message);

        res.status(400).json({
            message : "Error during Auth"
        })

    }




}


module.exports =  {
    userAuth
}