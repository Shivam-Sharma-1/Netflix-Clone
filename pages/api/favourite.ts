import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "POST") {
			const { currentUser } = await serverAuth(req, res);
			const { movieId } = req.body;

			const existingMovie = await prismadb.movie.findUnique({
				where: {
					id: movieId,
				},
			});

			if (!existingMovie) throw new Error("Invalid ID");

			const user = await prismadb.user.update({
				where: {
					email: currentUser.email || "",
				},
				data: {
					favouriteIds: {
						push: movieId,
					},
				},
			});
			return res.status(200).json(user);
		}
		return res.status(405).end();
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
}

export default handler;
