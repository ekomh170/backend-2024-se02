// import express and router
const express = require("express");
const router = require("./routes/api");

// buat object express
const app = express();

// menggunakan middleware
app.use(express.json());

// menggunakan router
app.use(router);

// mendefinisikan port
app.listen(3000);
