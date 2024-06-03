import express from "express";
import routes from "./routes/index.js";
import connectDB from "./configs/dbConnect.js";
import cors from "cors";
import printer from "./services/printer.js";

const connection = await connectDB();

connection.on("error", (error) => {
  console.error("Connection error", error);
});

connection.on("timeout", () => {
  console.error("Timeout on database connection");
});

connection.once("open", () => {
  console.log("Database connection successfully");
});

const app = express();
app.use(cors());
routes(app);

printer.println("Hello World");
printer.cut();

export default app;
