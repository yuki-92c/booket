"use client"

import { useParams } from "next/navigation";
import { PostDetail } from "@/components/PostDetail";
import { useEffect, useState } from "react";
import { IPostDetail } from "@/app/types/posts";

export default function () {
  const { id } = useParams(); 

  const [post, setPost] = useState<IPostDetail | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        const fetchData = await response.json();
        setPost(fetchData);
        console.log(fetchData);
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
        likeCount={post.likeCount}
        userName={post.user.name}
        postDate={post.createdAt}
        liked={post.liked}
      />}
    </div>
    
  );
}
