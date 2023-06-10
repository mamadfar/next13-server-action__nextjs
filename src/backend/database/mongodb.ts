import * as mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("MongoDB is already connected!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected!");
    } catch (e) {
        console.log(e);
    }
};

export default connectDB;