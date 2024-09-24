import {PostForm} from '@/components/PostContents';
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return (
      <div className="container mx-auto p-8" >
        <h1 className="text-3xl font-bold mb-4">Create a Post</h1>
        <p>You need to sign in to create a post.</p>
        </div>
    );
  }
  return (
    <div className="container mx-auto p-8" >
      <h1 className="text-3xl font-bold mb-4">Create a Post</h1>
      <PostForm
        bookTitle=""
        author=""
        publisher=""
        publishedYear={0} // or any valid number
        postTitle=""
        postContent=""
      />
    </div>
  );
}
