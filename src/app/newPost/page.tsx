import {PostForm} from '@/components/PostContents';
export default function Home() {
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
