import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MONGO db connection failed !!!", err);
  });
