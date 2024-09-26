"use client";
import { PostCard } from "@/components/PostCard";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  postTitle: string;
  user: {
    name: string;
  };
  postDate: string;
  likeCount: number;
}

export default function Home() {

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchPosts() {
    try {
      const response = await fetch("/api/posts");
      const fetchData = await response.json();
      const posts = fetchData.data;
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  }
  fetchPosts();
  }, []);


  return (
    <div className="container mx-auto p-4" >
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
