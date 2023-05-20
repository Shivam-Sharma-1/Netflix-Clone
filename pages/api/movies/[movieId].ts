import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end()

    try {
        await serverAuth(req, res)

        const { movieId } = req.query

        if (typeof movieId !== 'string' || !movieId) {
            throw new Error('Invalid ID');
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if (!movie) throw new Error('Invalid ID')

    } catch (error) {
        console.log(error);
        return res.status(400).end()
    }
}

export default handler