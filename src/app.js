import express from "express";
import routes from "./routes/index.js";
import connectDB from "./configs/dbConnect.js";
import cors from "cors";

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

// Allow All Origins

// Allow Custom Origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//     credentials: true,
//     optionSuccessStatus: 200,
//   })
// );

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.send();
//   next();
// });

//

export default app;
