import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") return res.status(405).end();

	try {
		const { currentUser } = await serverAuth(req, res);

		const FavouriteMovies = await prismadb.movie.findMany({
			where: {
				id: {
					in: currentUser?.favouriteIds,
				},
			},
		});

		return res.status(200).json(FavouriteMovies);
	} catch (error) {
		console.log(error);
		return res.status(400).end();
	}
}

export default handler;
