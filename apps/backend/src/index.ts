import express from "express";
import dotenv from "dotenv";
import update_settings from "./routes/settings/update_settings.js";
import get_settings from "./routes/settings/get_settings.js";
import search_coins from "./routes/search/search_coin.js";
import get_profile from "./routes/profile/get_profile.js";
import update_profile from "./routes/profile/update_profile.js";

dotenv.config();

const port: number = parseInt(process.env.PORT!);
const app = express();

app.use(express.json());

// @yet-to-implement
// add authentication middleware
// also provide userId if authentication is successfull
// For temp purpose lets use f815c393-2c6e-4456-88c6-6c4026ec5d95 as userId

// device settings endpoints (Read & Write)
app.use("/api/settings/get", get_settings); // To get the Settings info
app.use("/api/settings/update", update_settings); // To update the Settings info

// // search endpoints (Read only)
app.use("/api/search/search-coin", search_coins); // To get a particular Coins data
app.use("/api/search/search-multiple", search_coins); // To get the list of Coins data

// // profile endpoints (Read & Write)
app.use("/api/profile/get", get_profile); // To get the Profile info
app.use("/api/profile/update", update_profile); // To update the Profile info 

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the backend server",
        status: 200
    });
});

app.listen(3002, () => {
    console.log("The backend server is listening at 3002 ", 3002);
});