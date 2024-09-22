"use client"

import { useParams } from "next/navigation";
import { PostDetail } from "@/components/PostDetail";
import { use, useEffect, useState } from "react";

export default function () {
  const { id } = useParams(); 
  interface Post {
    id: string;
    postTitle: string;
    postContent: string;
    bookTitle: string;
    author: string;
    publishedYear: number;
    publisher: string;
    likes: number;
    user: {
      name: string;
    };
    createdAt: string;
  }

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        const fetchData = await response.json();
        setPost(fetchData);
      } catch (error) {
        console.error(error);
      }
    }
    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <div className="container mx-auto p-4" >
      {post && <PostDetail 
        id={post.id}
        postTitle={post.postTitle}
        postContent={post.postContent}
        bookTitle={post.bookTitle}
        author={post.author}
        publishedYear={post.publishedYear}
        publisher={post.publisher}
        likes={post.likes}
        userName={post.user.name}
        postDate={post.createdAt}
      />}
    </div>
    
  );
}
