const mongoose = require('mongoose');
const database_url = 'mongodb://127.0.0.1:27017/vivahdotcom';

// SingleTon class to connect MongoDb database.

class dbConnectSingleton {
    constructor(url){
        this.url = url;
        this.instance;
    }

    connect(){
        mongoose.connect(this.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true            
        }).then((db)=>{
            this.instance = db;
            console.log('conencted successfully');
        }).catch((err)=>{
            console.log('connection error:', err);
        });
    }
}

dbConnect = new dbConnectSingleton(database_url);
module.exports  = dbConnect;
