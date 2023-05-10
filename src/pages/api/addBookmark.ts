import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
    result: boolean;
}

async function findOrCreateBookmark(userId: number, showId: number) {
    let bookmark = await prisma.bookmark.findFirst({
        where: {
            show: {
                id: {
                    in: [showId]
                }
            },
            user: {
                id: {
                    in: [userId]
                }
            }
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

async function findOrCreateShow(id: number, title: string, year: number, category: string) {
    let show = await prisma.show.findFirst({
        where: {
            title,
            year,
            category
        }
    })
    if(!show) {
        show = await prisma.show.create({
            data: {
                title,
                category,
                year,
                bookmarks: {
                    create: [
                        {
                            user: {
                                connect: {
                                    id
                                }
                            }
                        }
                    ]
                }
            }
        })
    } else {
        await findOrCreateBookmark(id, show.id)
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id, title, year, category } = req.body
    await findOrCreateShow(id, title, year, category)
    res.json({result: true})
}