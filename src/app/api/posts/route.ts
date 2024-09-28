import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const posts = await prisma.post.findMany({
      // include user name to display in the card
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    })
    return NextResponse.json({ status: 200, data: posts })

  } catch (error) {
    return { status: 500, data: error }
  }
}
