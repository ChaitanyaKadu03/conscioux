import { BackendReturn } from "@repo/constructors/backend.js";
import { prisma } from "@repo/prismadb/prisma";
import express, { Request, Response } from "express"
import { date } from "zod";

const Router = express.Router()

Router.put('/', async (req: Request, res: Response): Promise<any> => {

    const userId = "f815c393-2c6e-4456-88c6-6c4026ec5d95";

    // @yet-to-implement => Try zod to make sure the type is valid
    // make sure the userId is valid
    if (!userId) {
        return res.json(new BackendReturn(403, false, "The userId was not found", {}))
    }

    const { key, value } = req.body;

    try {
        let profileModel;

        switch (key) {
            case "contact": {
                profileModel = await prisma.profile.update({ where: { userId: userId }, data: { contact: value } });
                break;
            } case "isPremium": {
                profileModel = await prisma.profile.update({ where: { userId: userId }, data: { isPremium: value } });
                break;
            } case "stats": {
                profileModel = await prisma.profile.update({ where: { userId: userId }, data: { stats: value } });
                break;
            }
            default: {
                return res.json(new BackendReturn(400, false, `The key has unknown key-value pair => ${key}-${value}`, {}))
            }
        }

        return res.json(new BackendReturn(200, true, "The profile model was found successfully!", { profileModel })) // @yet-to-implement => instead of sending whole profile model, just send the updated data

    } catch (error) {
        return res.json(new BackendReturn(500, false, "The profile model was found due to some technical issue.", { error }))
    }

})

export default Router