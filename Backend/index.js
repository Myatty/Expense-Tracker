const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// MIDDLEWARE
app.use(cors());

// DB CONNECTION

mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log(`DB Connection is successful!`);
}).catch((err) => {
    console.log(`An error Occured : ${err}`);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port : ${process.env.PORT}`);
})