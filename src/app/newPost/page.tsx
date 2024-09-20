import {PostForm} from '@/components/PostContents';
export default function Home() {
  return (
    <div className="container mx-auto p-8" >
      <h1 className="text-3xl font-bold mb-4">Create a Post</h1>
      <PostForm
        bookTitle="Book Title"
        author="Author"
        publisher="Publisher"
        publishedYear={2021}
        postTitle="Post Title"
        postContent="Post Content"
      />
    </div>
  );
}
