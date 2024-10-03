import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      // include user name to display in the card
      include: {
        user: {
          select: {
            name: true,
            customName: true,
          },
        },
      },
    })
    return NextResponse.json({ status: 200, data: posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ status: 500, error: 'Error fetching posts' }, { status: 500 })
  }
}
