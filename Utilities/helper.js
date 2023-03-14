const axios = require('axios');
const userRepo = require('../Model/Schema');

exports.checkUser = async(userInfo) => {
    try {
        
        const response = await userRepo.find({
            username : userInfo.username,
            password : userInfo.password
        })
        
        if(response.length > 0) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error);
    }
}

exports.getUserId = async() => {
    try {
        let userData  = (await userRepo.find({})).length;
        userData+=1;
        
        if(userData > 0) {
            userData = 'U100' + (userData);
            return userData
        } else {
            return 'U1001';
        }
        
    } catch (error) {
        console.log(error);
    }
}