const express = require("express");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(port, ()=>{
    console.log(`your server runs on port: ${port}`);
})