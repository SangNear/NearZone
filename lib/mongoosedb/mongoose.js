import mongoose from "mongoose";

let isConnected = false

export const connectToDb = async () => {
    mongoose.set("strickQuery", true)

    if(isConnected) {
        console.log("MongoDb is already connected");
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "NearZone",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true
        console.log("MongoDb is connected");
    } catch (error) {
        console.log(error);
    }
}