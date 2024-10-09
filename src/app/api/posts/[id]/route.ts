import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getPostDetail } from '@/app/services/postService';
import prisma from '@/lib/prisma';


export async function GET(request: Request, { params }: { params: { id: string } }) {

  const postId = params.id;

  try {
    //　get post detail
    const postDetail = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    
    const postAndUser = {
      ...postDetail,
    };

    if (!postDetail) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(postAndUser, { status: 200 });
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

  try {
    if (typeof userId !== 'string') {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const post = await getPostDetail(postId, userId);

    if (post.userId !== userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({ message: "Post deleted" }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "Error deleting post", error }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const postId = params.id;
  const userId = session.user.id;

  try {
    if (typeof userId !== 'string') {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const post = await getPostDetail(postId, userId);
    if (post.userId !== userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { bookTitle, author, publisher, publishedYear, postTitle, postContent } = body;

    if (!postTitle || !postContent) {
      return NextResponse.json({ message: "Post title and content are required" }, { status: 400 });
    }

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        bookTitle,
        author,
        publisher,
        publishedYear,
        postTitle,
        postContent,
      },
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating post", error }, { status: 500 });
  }
}
