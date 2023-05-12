import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
  result: boolean;
  id?: number;
  data?: UserInfo | null;
  bookmarks?: BookmarkInfo
}

type UserInfo = {
  password: string;
  id: number;
  bookmarks: BookmarkInfo
}

type BookmarkInfo = {
  showId: number
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
  if(result && result.password === password) {
    res.json({ result: true, id: result.id, bookmarks: result.bookmarks })
  } else {
    res.json({ result: false })
  }

}