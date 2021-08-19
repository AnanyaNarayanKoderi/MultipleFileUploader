'use strict';
const mongoose = require('mongoose');
module.exports = ()=>{
    mongoose.connect('mongodb://localhost/fileuploader',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:true
    }).then(()=>console.log("Connected to mongodb"));
};