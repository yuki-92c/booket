import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getPostDetail } from '@/app/services/postService';
import prisma from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // const session = await auth();

  // if (!session || !session.user) {
  //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  // }

  // const postId = params.id;
  // const userId = session.user.id;

  // try {
  //   if (typeof userId !== 'string') {
  //     return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
  //   }
  //   const postDetail = await getPostDetail(postId, userId);
  //   return NextResponse.json(postDetail, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ message: "Error getting post detail", error }, { status: 500 });
  // }
  const postId = params.id;

  try {
    //　get post detail
    const postDetail = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        user: true, // include user info
      },
    });

    if (!postDetail) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(postDetail, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error getting post detail", error }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const postId = params.id;
  const userId = session.user.id;
  console.log('userId!!!!!', userId);

  try {
    if (typeof userId !== 'string') {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const post = await getPostDetail(postId, userId);
    console.log("post.userId!!!!!!!!", post.userId);


    if (post.userId !== userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    
    console.log("here")
    console.log("⭐️postId", postId)

    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({ message: "Post deleted" }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "Error deleting post", error }, { status: 500 });
  }
}
