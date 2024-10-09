"use client"

import { PostForm } from "@/components/PostForm";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { IPostDetail } from "@/app/types/posts";

export default function Home() {
  const { id } = useParams();
  // const router = useRouter();
  const [post, setPost] = useState<IPostDetail | null>(null);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        // console.log(res);
        const data = await res.json();
        // console.log(data);
        setPost(data);
      } catch (error) {
        console.error("Error loading post:", error);
      }
    };
  
    fetchPost();
  }, [id]);

  // setPostが実行されるまでの間、postはnullなので、ローディング中の表示を追加
  if (!post) {
    return (
      <div className="container mx-auto p-8" >
        <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
        <p className="font-bold">Loading...</p>
      </div>
    );
  }
  

  return (
    <div className="container mx-auto p-8" >
      <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
      {post && (
        <PostForm
          bookTitle={post.bookTitle}
          author={post.author}
          publisher={post.publisher}
          publishedYear={post.publishedYear}
          postTitle={post.postTitle}
          postContent={post.postContent}
          editMode={true}
          postId={post.id}
        />
      )}
    </div>
  )
}
