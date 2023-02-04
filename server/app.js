const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(require('./router'));
app.use(cors({ 
    credentials: true, 
    origin: Config.CLIENT_URL.split(','),
    exposedHeaders: ['set-cookie'] 
}));

const PORT = 5000;
const url = "mongodb://127.0.0.1:27017/tracker"

const connectDB = (url) => {

    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`DB Connection successful`);
    }).catch((err) => {
        console.log(`DB not connected`);
        console.log(err);
    });
}

const start = async () => {
    try{
        connectDB(url);
        app.listen(PORT,()=>{
            console.log(`Server is running at port no ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}

start();