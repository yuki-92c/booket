import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/auth';

export async function POST(
  request: Request
){
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try{
    
    const data = await request.json();
    const userId = session.user.id;
    const post = await prisma.post.create({
      data: {
        postTitle: data.postTitle,
        postContent: data.postContent,
        bookTitle: data.bookTitle,
        publisher: data.publisher,
        publishedYear: data.publishedYear,
        author: data.author,
        likes: 0,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return NextResponse.json(post, { status: 201 });
  
  } catch (error) {
    console.log("error  ", error);
    return NextResponse.json({ message: "Error creating post", error }, { status: 500 });
  }
}
