import express from "express";
import dotenv from "dotenv";
import signup from "./routes/auth/signup";
import update_account from "./routes/auth/update_account";
import update_settings from "./routes/settings/update_settings";

dotenv.config();

const port: number = parseInt(process.env.PORT!);
const app = express();

app.use(express.json());

app.use("/auth/signup", signup);
app.use("/update-account", update_account);
app.use("/update-settings", update_settings);

app.get("/", (req,res)=>{
    res.status(200).json({
        message: "Welcome to the backend server",
        status: 200
    });
});

app.listen(port, ()=>{
    console.log("The backend server is listening at port ", port);
});