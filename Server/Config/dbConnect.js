const {default : mongoose} = require('mongoose');

// Connect to MongoDB
const dbConnect = () => {
    try {
        const con = mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to DataBase");
    } catch (error) {
        console.log("DataBase Error");
        
    }
}

module.exports = dbConnect;