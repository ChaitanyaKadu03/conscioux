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

            resolve(result.data);

        } catch (error) {
            reject(error);
        }

    }).then(async (resolve: any) => {

        await redis.hset("token", resolve.data[0]);
        await redis.pexpire("token", 5000);
        return;
        
    }).catch(err => {
        
        console.log(err)
        return;

    })

    return;
}

realtimeData()