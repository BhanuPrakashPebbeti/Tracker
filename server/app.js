const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));

const PORT = 5000;

const start = async () => {
    try{
        // connectDB(url);
        app.listen(PORT,()=>{
            console.log(`Server is running at port no ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}

start();