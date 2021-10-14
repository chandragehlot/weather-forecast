const mongoose = require('mongoose');
const database_url = process.env.MONGODB_URL;

/* 
* SingleTon class to connect MongoDb database.
*/

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
            console.log('mongo db conencted successfully');
        }).catch((err)=>{
            console.log('mongo db connection error:', err);
            process.exit(1);
        });
    }
}

dbConnect = new dbConnectSingleton(database_url);
module.exports  = dbConnect;
