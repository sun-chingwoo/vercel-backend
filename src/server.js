import express from "express"
import route from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"



dotenv.config()
connectDB()
const app=express();



app.use(express.json())
app.use(cors(
    {
        origin:"https://vercel-forntend-dyqc.vercel.app/"
    }
));





app.use("/api/notes",route)

app.listen(process.env.PORT ,()=>{
    console.log("listening")
});
