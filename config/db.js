const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async ()=>{
  try{
    await mongoose.connect(db,{
      useNewURLParser:true
    });
  }
  catch(err){
    console.error(err.message);
  }
}

module.exports = connectDB;