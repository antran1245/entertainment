import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
    result: boolean;
}

async function findOrCreateBookmark(userId: number, showId: number) {
    let bookmark = await prisma.bookmark.findFirst({
        where: {
            showId,
            userId
        }
    })
    if(!bookmark) {
        await prisma.bookmark.create({
            data: {
                userId,
                showId
            }
        })
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id, showId } = req.body
    await findOrCreateBookmark(id, showId)
    res.json({result: true})
}