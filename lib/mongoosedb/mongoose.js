import mongoose from "mongoose";

let isConnected = false

export const connectToDb = async () => {
    mongoose.set("strictQuery", true)

    if(isConnected) {
        console.log("MongoDb is already connected");
    }

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "NearZone",
            userNewUrlParser: true,
            userUnifiedTopology: true,
        })

        isConnected = true
        console.log("MongoDb is connected");
    } catch (error) {
        console.log(error);
    }
}