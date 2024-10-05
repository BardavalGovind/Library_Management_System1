const bcrypt = require("bcrypt");

const encryptPassword = async (plainTextPassword)=>{
    try{
        return await bcrypt.hash(plainTextPassword, 8);
    }
    catch(err){
        console.error(err);
        throw err;
    }
};

const checkPassword = async (plainTextPassword, encryptedPassword)=>{
    return await bcrypt.compare(plainTextPassword, encryptPassword);
};

module.exports = { encryptPassword, checkPassword };