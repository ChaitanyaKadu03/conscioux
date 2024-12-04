import { redis } from "@repo/redisdb/redis";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function dummyData() {

    await new Promise(async (resolve, reject) => {

        try {

            const result: any = await axios.get("https://api.backpack.exchange/api/v1/tickers")

            resolve(result.data);

        } catch (error) {
            reject(error);
        }

    }).then(async (resolve: any) => {

        const coin = {
            quote: {
                USD: {
                    price: resolve[0].lastPrice
                }
            }
        }

        await redis.hset("token", coin);
        await redis.pexpire("token", 5000);

    }).catch(err => {

        console.log(err)

    })
}

dummyData()