const express = require("express")
const cors = require("cors")
const userRoute = require("./routes/user-route")
const bookRoute = require("./routes/book-route");
const app = express();


require("./appMongoose");
 
app.use(cors());
app.use(express.json())

app.use("/user", userRoute);
app.use("/book", bookRoute);

app.listen(8080, ()=>{
    console.log('library app backend is running on port 8080');
})
