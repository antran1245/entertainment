import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
  result: boolean,
  data?: UserInfo | null
}

type UserInfo = {
  password: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {email, password} = req.body
  const result: UserInfo | null = await prisma.user.findUnique({
    where: { email: email },
    select: { password: true }
  })
  if(result && result.password === password) {
    res.json({ result: true })
  } else {
    res.json({ result: false })
  }

}