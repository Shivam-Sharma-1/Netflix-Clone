import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            const { currentUser } = await serverAuth(req, res);
            const { id } = req.body.data;
            
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: id
                },
            });
        
            if (!existingMovie) throw new Error("Invalid ID");
        
            const updatedFavouriteIds = without(
                currentUser.favouriteIds,
                id
            );
            const updatedUser = await prismadb.user.update({
                where: {
                    email: currentUser.email || "",
                },
                data: {
                    favouriteIds: updatedFavouriteIds,
                },
            });
            return res.status(200).json(updatedUser);
        }
        return res.status(405).end();

    } catch(error) {
        console.log(error);
		res.status(500).end();
    }
}

export default handler