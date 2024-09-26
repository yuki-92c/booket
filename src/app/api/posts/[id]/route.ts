import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getPostDetail } from '@/app/services/postService';

export async function GET(request: Request, { params }: { params: { id: string } }) {
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
    const postDetail = await getPostDetail(postId, userId);
    return NextResponse.json(postDetail, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error getting post detail", error }, { status: 500 });
  }
}
