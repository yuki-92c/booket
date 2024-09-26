import prisma from '@/lib/prisma';

export async function getPostDetail(postId: string, userId: string) {
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: 
      { likes: true,
        user: {
          select: {
            name: true,
          }
        }

      },
  });

  if (!post) {
    throw new Error('Post not found');
  }

  const liked = await prisma.like.findUnique({
    where: {
      userId_postId: { userId, postId },
    },
  });

  return {
    ...post,
    liked: !!liked,  // liked が存在するかどうかを判定
  };
}
