import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
  result: boolean;
  id?: number;
  data?: UserInfo | null
}

type UserInfo = {
  password: string;
  id: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {email, password} = req.body
  const result: UserInfo | null = await prisma.user.findUnique({
    where: { email: email },
    select: { id: true, password: true }
  })
  if(result && result.password === password) {
    res.json({ result: true, id: result.id })
  } else {
    res.json({ result: false })
  }

}