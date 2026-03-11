import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected:", connect.connection.host, connect.connection.name)
    } catch (err) {
        console.log("Error Connecting Databse:", err)
        process.exit(1)
    }
}

export default connectDB;