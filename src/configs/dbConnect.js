import mongoose from "mongoose";

// database conection

async function connectDB() {
  mongoose.connect(
    `mongodb+srv://martaf:${process.env.PASSWORD_DB_CONNECTION}@cluster-drivein.bm22ixy.mongodb.net/cineDB?retryWrites=true&w=majority&appName=Cluster-drivein`
  );

  return mongoose.connection;
}

export default connectDB;
