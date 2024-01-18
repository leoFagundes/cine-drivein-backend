import mongoose from "mongoose";

async function connectDB() {
  mongoose.connect(
    `mongodb+srv://admin:${process.env.PASSWORD_DB_CONNECTION}@cluster0.mpcuegc.mongodb.net/cineDB?retryWrites=true&w=majority`
  );

  return mongoose.connection;
}

export default connectDB;
