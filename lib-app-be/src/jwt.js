const jwt = require("jsonwebtoken");

const CS_LIB_APP_SIGN = "CS_LIB_APP_SIGN";

const generateToken = ({ _id, type }) => {
    const token = jwt.sign({ _id, type }, CS_LIB_APP_SIGN);
    return token;
};

const verifyToken = (token) => {
    try{
        const payload = jwt.verify(token, CS_LIB_APP_SIGN);
        return { status: true, payload };
    }
    catch(err){
        console.error(err);
        return { status: false, payload: undefined };
    }
};
module.exports = { generateToken, verifyToken };
