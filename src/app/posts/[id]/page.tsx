"use client"

import { useParams } from "next/navigation";
import {PostDetail} from "@/components/PostDetail";

export default function () {
  const { id } = useParams(); 

  return (
    <div className="container mx-auto p-4" >
      <PostDetail 
        id={Number(id)} 
        postTitle="Title1"
        postContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore consequuntur dignissimos reiciendis numquam culpa magni illum quibusdam praesentium veniam ipsum? Odio voluptates repudiandae accusantium rerum ut molest"
        bookTitle="HARAPEKO AOMUSHI"
        author="Kiyohiko Azuma"
        publisher="ABC book"
        publishedYear={2000}
        likes={12}
        userName="Mehmet"
        postDate="2024/12/12"
      />
    </div>
    
  );
}
