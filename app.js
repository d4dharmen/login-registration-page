import express from "express";
import connectMongoDb from "./dbs/connectDb.js";
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/logindb";

//settingup defaultengine
app.set('view engine', 'ejs')
//routing
app.use("/", web);

// setting up server
app.listen(port, () => {
  console.log(` server started on http://localhost:${port}`);
});

//mongodb connection function call with parameter
connectMongoDb(MONGODB_URI);