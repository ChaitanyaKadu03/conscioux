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
        let settingsModel;

        switch (key) {
            case "language": {
                let settingsModel = await prisma.settings.update({ where: { userId: userId }, data: { language: value } });
                break;
            } case "theme": {
                settingsModel = await prisma.settings.update({ where: { userId: userId }, data: { theme: value } });
                break;
            } case "currency": {
                settingsModel = await prisma.settings.update({ where: { userId: userId }, data: { currency: value } });
                break;
            } case "country": {
                settingsModel = await prisma.settings.update({ where: { userId: userId }, data: { country: value } });
                break;
            }
            default: {
                return res.json(new BackendReturn(400, false, `The key has unknown key-value pair => ${key}-${value}`, {}))
            }
        }

        return res.json(new BackendReturn(200, true, "The settings model was found successfully!", { settingsModel })) // @yet-to-implement => instead of sending whole settings model, just send the updated data

    } catch (error) {
        return res.json(new BackendReturn(500, false, "The settings model was found due to some technical issue.", { error }))
    }

})

export default Router