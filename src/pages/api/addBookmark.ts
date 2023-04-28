import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
    result: boolean;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id, title, year, category } = req.body
    let resp = await prisma.bookmark.create({
        data: {
            title,
            year,
            category,
            user: {
                connect: {
                    id: id
                }
            }
        }
    })
    console.log(resp, id)
    res.json({result: true})
}