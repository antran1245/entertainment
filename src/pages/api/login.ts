import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
  result: boolean;
  id?: number;
  data?: UserInfo | null;
  bookmarks?: Show
}

type UserInfo = {
  password: string;
  id: number;
  bookmarks: BookmarkInfo
}

type BookmarkInfo = {
  showId: number
}[]

type Show = {
  title: string,
  year: number,
  category: string
}[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {email, password} = req.body
  const result: UserInfo | null = await prisma.user.findUnique({
    where: { email: email },
      select: {
        id: true,
        password: true,
        bookmarks: {
          select: {
            showId: true
          }
        }
    }
  })
  const shows: Show | null = await prisma.show.findMany({
    where: {
      id: { in: result?.bookmarks.map(item => item.showId)}
    }
  })
  if(result && result.password === password) {
    res.json({ result: true, id: result.id, bookmarks: shows })
  } else {
    res.json({ result: false })
  }

}