//jshint esversion:6
const express = require("express")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const CategoryRoute = require("./routes/categories")
const multer = require("multer")

const app = express();
app.use(express.json());
dotenv.config();

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },filename:(req,file,cb)=>{
        cb(null,req.body.name);
        // cb(null,"hello.jpeg");
    }
})

const upload = multer({storage:storage})
app.post("/api/v1/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
})

mongoose.connect(process.env.MONGO_URI)
    .then((c) => {
        console.log(`Mongodb Connected to ${c.connection.host}`);
    }).catch((err) => {
        console.log(err);

    });


app.use("/api/v1/auth",authRoute);
app.use("/api/v1/users",userRoute);
app.use("/api/v1/posts",postRoute);
app.use("/api/v1/categories",CategoryRoute);

app.listen("5500", () => {
    console.log("Backend is runnig");
})

