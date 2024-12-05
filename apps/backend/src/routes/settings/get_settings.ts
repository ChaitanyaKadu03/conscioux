import { BackendReturn } from "@repo/constructors/backend.js";
import { prisma } from "@repo/prismadb/prisma";
import express, { Request, Response } from "express"

const Router = express.Router()

Router.get('/', async (req: Request, res: Response): Promise<any> => {

    const userId = "f815c393-2c6e-4456-88c6-6c4026ec5d95";

    // @yet-to-implement => Try zod to make sure the type is valid
    // make sure the userId is valid
    if (!userId) {
        return res.json(new BackendReturn(403, false, "The userId was not found", {}))
    }

    try {

        const settingsModel = await prisma.settings.findUnique({ where: { userId: userId } });

        if (!settingsModel) {
            return res.json(new BackendReturn(403, false, "The settings model was not found!", {}))
        }

        const { language, theme, currency, country } = settingsModel;

        return res.json(new BackendReturn(200, true, "The settings model was found successfully!", { language, theme, currency, country }))

    } catch (error) {
        return res.json(new BackendReturn(500, false, "The settings model was found due to some technical issue.", { error }))
    }

})

export default Router