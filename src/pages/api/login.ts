import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {email, password} = req.body
  const result = await prisma.user.create({
    data: {
      email,
      password
    }
  })
  console.log(result)
  res.status(200).json({ name: 'John Doe' })
}