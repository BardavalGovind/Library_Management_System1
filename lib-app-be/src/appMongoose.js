//appMongoose.js
const { connect } = require("mongoose")

const MONGO_DB_URL = "mongodb+srv://bardavalgovind:GnS2005@cluster1.ouyfx.mongodb.net";
const DB_NAME = "cs-library-app";

const connectDb = async ()=>{
    try{
        await connect(`${MONGO_DB_URL}/${DB_NAME}`);
        console.log(`Mongodb connection is successful.`)
    }
    catch(err){
        console.error(err);
    }
}

connectDb()

module.exports = {};
