import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/auth';

export async function POST(request: Request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { postId } = await request.json();
  const userId = session.user.id;

  if (!userId || !postId) {
      return NextResponse.json({ message: "Invalid user or post ID" }, { status: 400 });
  }

  try {
      // Check if the user has already liked the post
      const existingLike = await prisma.like.findUnique({
          where: {
              userId_postId: { userId: userId as string, postId: postId as string }, // Combined unique constraint
          },
      });

    if (existingLike) {
      // If like already exists, remove it and decrement the likeCount
      await prisma.like.delete({
        where: { id: existingLike.id },
      });

      await prisma.post.update({
        where: { id: postId },
        data: { likeCount: { decrement: 1 } },
      });

      return NextResponse.json({ message: "Like removed", liked: false }, { status: 200 });
    } else {
      // If like doesn't exist, add a like and increment the likeCount
      await prisma.like.create({
        data: {
          userId,
          postId,
        },
      });

      await prisma.post.update({
        where: { id: postId },
        data: { likeCount: { increment: 1 } },
      });

      return NextResponse.json({ message: "Post liked", liked: true }, { status: 201 });
    }
  } catch (error) {
    console.log("Error handling like: ", error);
    return NextResponse.json({ message: "Error handling like", error }, { status: 500 });
  }
}
