// database.js
import mongoose from "mongoose";

const uri = "mongodb+srv://rahul:Rahulpal123@apilearn.0r18wct.mongodb.net/APILEARN?retryWrites=true&w=majority&appName=APILearn";

const DatabaseConnect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database is connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

export default DatabaseConnect;
