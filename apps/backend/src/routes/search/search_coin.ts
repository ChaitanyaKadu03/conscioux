import { BackendReturn } from "@repo/constructors/backend.js";
import { redis } from "@repo/redisdb/redis";
import express, { Request, Response } from "express"

const Router = express.Router()

Router.get('/', async (req: Request, res: Response): Promise<any> => {

    const userId = "f815c393-2c6e-4456-88c6-6c4026ec5d95";

    // @yet-to-implement => Try zod to make sure the type is valid
    // make sure the userId is valid
    if (!userId) {
        return res.json(new BackendReturn(403, false, "The userId was not found", {}))
    }

    const { coinId } = req.body;

    if (!coinId) {
        return res.json(new BackendReturn(403, false, "The coinId was not found", {}))
    }

    try {

        const allCoinsData = JSON.parse((await redis.get("coins"))!);

        if (!allCoinsData) {
            return res.json(new BackendReturn(500, false, `The coinData for coinId{${coinId}} was not found due to server issues!`, {}))
        }

        const coinData = allCoinsData.data.find((value: any) => {

            if (value.id == coinId) {

                return value;

            }

        })

        if (!coinData) {
            return res.json(new BackendReturn(403, false, `The coinData for coinId{${coinId}} was not found`, {}))
        }

        return res.json(new BackendReturn(200, true, `The coinData for coinId{${coinId}} was found successfully!`, { data: coinData }))

    } catch (error) {
        return res.json(new BackendReturn(500, false, `The coinData for coinId{${coinId}} was not found due to server issues!`, {}))
    }
})

export default Router