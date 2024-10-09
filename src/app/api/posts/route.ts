import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
// import { auth } from '@/auth'


export const GET = async () => {
  // const session = await auth()

  // console.log('session!!!!!', session)
  try {
    const posts = await prisma.post.findMany({
      // include user name to display in the card
      include: {
        user: {
          select: {
            name: true
          }
        }
      }
    })
    // console.log('postsJIJIJI:', posts)
    return NextResponse.json({ status: 200, data: posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ status: 500, error: 'Error fetching posts' }, { status: 500 })
  }
}
