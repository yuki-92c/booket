"use client";
import { PostCard } from "@/components/PostCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Post {
  id: string;
  postTitle: string;
  userId: string;
  postDate: string;
  likeCount: number;
  // userName: string;
  user: {
    name: string;
  };
}

export default function Home() {

  const { data: session } = useSession();
  // const { data: session, status } = useSession();
  

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
      <div className="flex justify-end">
        <div className="p-2 rounded-md bg-emerald-400 dark:bg-emerald-700 w-36 items-center justify-center flex">
          <Link href={"/newPost"}>Create a Post</Link>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Posts</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
