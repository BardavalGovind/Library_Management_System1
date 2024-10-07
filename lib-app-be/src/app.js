const express = require("express")
const cors = require("cors")
const userRoute = require("./routes/user-route")
const app = express();


require("./appMongoose");
 
app.use(cors());
app.use(express.json())

app.use("/user", userRoute);

app.listen(8080, ()=>{
    console.log('library app backend is running on port 8080');
})
