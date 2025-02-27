require('dotenv').config();
const express = require("express");
const router = express.Router();
const {User} = require("../db.js");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
 

const signUpValidator = zod.object({

    email : zod.string().email(),
    username : zod.string(),
    password : zod.string()

})

router.post("/signup" , async (req,res)=>{

    const {email , password, username} = req.body;
    
    const {success} = signUpValidator.safeParse({
        email , 
        username , password
    })

    if(!success){
        return res.status(400).json({
            message : "No valid inputs at signup route"
        })
    }

    const check = await User.findOne({
        email
    })

    if(check){
        return res.status(400).json({
            message : "User Already Exists"
        })
    }

    const user = await User.create({
        username , email , password
    });

    if(!user){
        return res.status(400).json({
            message : "some error"
        })
    }

    

    console.log(process.env.JWT_SECRET);
    const token = jwt.sign({userId : user._id} , process.env.JWT_SECRET);

    res.status(200).json({
        token
    })
}) 

const signinValidator = zod.object({

    email : zod.string().email(),
    password : zod.string()

})

router.post("/signin" , async (req,res)=>{

    const {email , password} = req.body;

    const {success} = signinValidator.safeParse({
        email , password
    })
 
    if(!success){
        return res.status(400).json({
            message : "invalid inputs"
        })
    }

    const user = await User.findOne({
        email , password
    })

    if(!user){
        return res.status(400).json({
            message : "no user exists"
        })
    }

    const userId = user._id;

    const token = jwt.sign({
        userId
    } , process.env.JWT_SECRET)


    res.status(200).json(
    {
        token
    }
    )

})










module.exports = router;
