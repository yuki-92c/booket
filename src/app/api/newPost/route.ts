import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(
  request: Request
){
  try{

    const data = await request.json();
    console.log("data", data.postTitle);
    

    const post = await prisma.post.create({
      data: {
        postTitle: data.postTitle,
        postContent: data.postContent,
        bookTitle: data.bookTitle,
        publisher: data.publisher,
        publishedYear: data.publishedYear,
        author: data.author,
        likes: 0,
        userId: "user-id-placeholder",
      },
    });
    console.log(post);

    return NextResponse.json(post, { status: 201 });
    // const post = await prisma.post.create({
    //   data: {
    //     postTitle: data.postTitle,
    //     postContent: data.postContent,
    //     bookTitle: data.bookTitle,
    //     publisher: data.publisher,
    //     publishedYear: data.publishedYear,
    //     author: data.author,
    //     likes: 0,
    //     userId: "user-id-placeholder",
    //     // user: {
    //     //   connect: {
    //     //     id: data.userId,
    //     //   },
    //     // },
    //   },
    // });
    // console.log(post);
  
    // return NextResponse.json(post, { status: 201 });
  
  } catch (error) {
    return NextResponse.json({ message: "Error creating post", error }, { status: 500 });
  }
}
