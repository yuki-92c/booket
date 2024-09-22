import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

// interface IPost {
//   id: string;
//   postTitle: string;
//   postContent: string;
//   bookTitle: string;
//   author: string;
//   publishedYear: number;
//   publisher: string;
//   likes: number;
//   userId: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const posts = await prisma.post.findMany({
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
