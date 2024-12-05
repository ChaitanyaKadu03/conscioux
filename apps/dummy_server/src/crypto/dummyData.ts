import { redis } from "@repo/redisdb/redis";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function dummyData() {

    await new Promise(async (resolve, reject) => {

        try {

            const result: any = await axios.get("https://api.backpack.exchange/api/v1/tickers")

            console.log("1a")
            resolve(result.data);
            
        } catch (error) {
            reject(error);
        }
        
    }).then(async (resolve: any) => {
        
        console.log("2a")
        let data: string | null = await redis.get("token");

        if (!data) {
            return;
        }

        let newData = JSON.parse(data);

        newData.quote.USD.price = resolve[0].lastPrice;

        await redis.set("token", JSON.stringify(newData));
        console.log("DUMMYDATA Updated...")
        return;

    }).catch(err => {

        console.log(err)

    })
}