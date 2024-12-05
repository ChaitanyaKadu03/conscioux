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

        const profileModel = await prisma.profile.findUnique({ where: { userId: userId } });

        if (!profileModel) {
            return res.json(new BackendReturn(403, false, "The profile model was not found!", {}))
        }

        const { contact, isPremium, stats } = profileModel;

        return res.json(new BackendReturn(200, true, "The profile model was found successfully!", { contact, isPremium, stats }))

    } catch (error) {
        return res.json(new BackendReturn(500, false, "The profile model was found due to some technical issue.", { error }))
    }

})

export default Router