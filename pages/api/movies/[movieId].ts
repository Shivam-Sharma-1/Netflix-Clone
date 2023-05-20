import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end()

    try {
        await serverAuth(req, res)

        const { movieId } = req.query
        if (!movieId) throw new Error('Invalid ID')

        if (typeof movieId !== 'string' || !movieId) {
            throw new Error('Invalid ID');
        }

        const movies = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })

        return res.status(200).json(movies)

    } catch (error) {
        console.log(error);
        return res.status(400).end()
    }
}

export default handler