const mongoose = require('mongoose');

const connectDatabase = ()=>{mongoose.connect("mongo://localhost:27017/Ecommerce").then((data)=>{
    console.log(`mongo connected with server: ${data.connection.host}`);
}).catch((err)=>{
    console.log(err)
})}