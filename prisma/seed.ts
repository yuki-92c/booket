import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ユーザーを作成
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'John Doe',
      password: 'password123',  // 実際には、パスワードはハッシュ化してください
      posts: {
        create: [
          {
            postTitle: 'Introduction to TypeScript',
            postContent: 'TypeScript is a strongly typed programming language.',
            bookTitle: 'Learning TypeScript',
            author: 'Josh Goldberg',
            publishedYear: 2022,
            publisher: 'O\'Reilly Media',
            likes: 10,
          },
          {
            postTitle: 'Exploring Next.js',
            postContent: 'Next.js is a powerful React framework for building full-stack applications.',
            bookTitle: 'Next.js Up & Running',
            author: 'Sarah Drasner',
            publishedYear: 2021,
            publisher: 'O\'Reilly Media',
            likes: 5,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      name: 'Jane Smith',
      password: 'password456',
      posts: {
        create: [
          {
            postTitle: 'Mastering React',
            postContent: 'React is a popular JavaScript library for building user interfaces.',
            bookTitle: 'React and TypeScript',
            author: 'Cory House',
            publishedYear: 2021,
            publisher: 'Pluralsight',
            likes: 15,
          },
        ],
      },
    },
  });

  console.log('Seed data inserted!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
