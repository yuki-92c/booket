"use client"
import { useParams } from "next/navigation";
import { PostDetail } from "@/components/PostDetail";
import { useEffect, useState } from "react";
import { IPostDetail } from "@/app/types/posts";

export default function Home () {
  const { id } = useParams();

  const [post, setPost] = useState<IPostDetail | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        const fetchData = await response.json();
        setPost(fetchData);
        // console.log(fetchData);
      } catch (error) {
        console.error(error);
      }
    }
    if (id) {
      fetchPost();
    }
  }, [id]);
  // console.log("postdayo", post);
  // setPostが実行されるまでの間、postはnullなので、ローディング中の表示を追加
  if (!post) {
    return (
      <div className="container mx-auto p-8" >
        <p className="font-bold">Loading...</p>
      </div>
    );
  }
  

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
        // customName={post.user.customName}
        postDate={post.createdAt}
        liked={post.liked}
        userId= {post.userId}
        loginUserId= {post.loginUserId}
      />}
    </div>
    
  );
}
