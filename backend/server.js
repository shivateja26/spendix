require("dotenv").config;
const express = require("express");
const cors = ("cors");
const path = require(path);

const app = express();
//middleware to hande cors
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],
    })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on pn port ${PORT}`))




