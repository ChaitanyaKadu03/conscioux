import { redis } from "@repo/redisdb/redis";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function realtimeData() {

    await new Promise(async (resolve, reject) => {

        try {

            const result: any = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
                {
                    headers:
                        { 'X-CMC_PRO_API_KEY': process.env.API_KEY }
                }
            )

            console.log("1")
            resolve(result.data);
            
        } catch (error) {
            reject(error);
        }
        
    }).then(async (resolve: any) => {
        
        console.log("2")
        await redis.set("token", JSON.stringify(resolve.data[0]));
        console.log("REALTIMEDATA Updated...")

        return;

    }).catch(err => {

        console.log(err)
        return;

    })

    return;
}