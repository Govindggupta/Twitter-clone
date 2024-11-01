import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/db.js";

dotenv.config({ path: ".env" })

const app = express();
const PORT = process.env.PORT || 5000

console.log(process.env.MONGO_URI)

app.use("/api/auth", authRoutes);

app.listen(PORT,  () => {
    console.log(`Server is running at ${PORT}...`);
    connectMongoDB(); 
})
