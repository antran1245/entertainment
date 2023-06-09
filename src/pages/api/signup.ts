import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { Prisma } from '@prisma/client'

type Data = {
  result: boolean;
  reason?: string;
  id?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {email, password} = req.body
  try {
    let user = await prisma.user.create({
      data: {
        email,
        password
      },
      select: {id: true}
    })
    console.log(user)
    res.status(200).json({ result: true, id: user.id })
  } catch (e) {
    if ((e instanceof Prisma.PrismaClientKnownRequestError) && e.code === 'P2002') {
      res.json({ result: false, reason: 'Email Exist' })
    } else {
      res.json({ result: false })
    }
  }
}