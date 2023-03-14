const userRepo = require('../Model/Schema');
const helper = require('../Utilities/helper')

exports.registerUser = async(req,res)=> {
    try {
        
        const userData = await helper.checkUser(req.body);
        
        if(userData === true) {
            res.status(201).json({
                data : "User Already Exists"
            })
        } else {
            const userId = await helper.getUserId();
            console.log(userId);
            const insertUser = await userRepo.create({
                userId : userId,
                username : req.body.username,
                password : req.body.password,
            });
            

            if(insertUser) {
                res.status(200).json({
                    data : "User Registered"
                })
            }
        }
    } catch (error) {
        console.log(error.message," in controller")
        res.status(404).json({
            data : error.message
        })
    }
}

exports.loginUser = async(req,res) => {
    try {

        const username = req.body.username;
        const password = req.body.password;

        if(username.length === 0 || password.length === 0) {
            res.status(201).json({
                data : "All fields are mandatory"
            })
        } else {
            const checkUser = await helper.checkUser(req.body);

            if(checkUser) {
                res.status(201).json({
                    data : "Login Successful"
                })
            } else {
                res.status(201).json({
                    data : "User not registered"
                })
            }
        }
    } catch (error) {
        res.status(404).json({
            data : error.message
        })
    }
}

exports.invalid = async(req,res,next) => {
    const err = new Error();
    err.message = 'Invalid Route';
    err.status = 404;
    next(err);
};