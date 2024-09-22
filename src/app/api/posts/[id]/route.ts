import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET request to retrieve a single post by id
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ message: "Error retrieving post", error }, { status: 500 });
  }
}
