"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"
import { PostFormProps } from "@/app/types/posts"
import { useRouter } from 'next/navigation'; 
// Zodスキーマ定義
const postSchema = z.object({
  bookTitle: z.string().min(1, "Book Title is required").max(100, "Book Title is too long").default(""),
  author: z.string().min(1, "Author is required"),
  publisher: z.string(),
  publishedYear: z.number(),
  postTitle: z.string(),
  postContent: z.string(),
});

export function PostForm({
  bookTitle,
  author,
  publisher,
  publishedYear,
  postTitle,
  postContent,
  editMode = false,
  postId= ""
} : PostFormProps) {
  const [formData, setFormData] = useState({
    bookTitle,
    author,
    publisher,
    publishedYear,
    postTitle,
    postContent,
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'publishedYear' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = postSchema.safeParse(formData);
    if(result.success === false) {
      console.log(result.error.errors);
      setErrors(result.error.errors);
      console.log(errors);
      return;
    }

    try {
      const endpoint = editMode ? `/api/posts/${postId}` : "/api/newPost";
      const method = editMode ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // const res = await fetch("/api/newPost", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      if (res.ok) {
        setFormData({
          bookTitle: "",
          author: "",
          publisher: "",
          publishedYear: 0,
          postTitle: "",
          postContent: "",
        });
        router.push('/dashboard')


      } else {
        console.log(res);
        alert(editMode ? "Failed to edit post." : "Failed to create post.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(editMode ? "An error occurred while editing the post." :"An error occurred while creating the post.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-8">
        <div>
          <label htmlFor="bookTitle" className="block text-sm font-bold text-slate-500 dark:text-slate-400">
            Book Title
          </label>
          <Input
            name="bookTitle" // `name` 属性を追加
            type="text"
            value={formData.bookTitle}
            onChange={handleChange}
            placeholder="Book Title"
            maxLength={50}
            className="mb-4 border-slate-200 dark:border-slate-700"
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-sm font-bold text-slate-500 dark:text-slate-400">
            Author
          </label>
          <Input
            name="author" // `name` 属性を追加
            type="text"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            maxLength={50}
            className="mb-4 border-slate-200 dark:border-slate-700"
          />
        </div>
        <div>
          <label htmlFor="publisher" className="block text-sm font-bold text-slate-500 dark:text-slate-400">
            Publisher
          </label>
          <Input
            name="publisher" // `name` 属性を追加
            type="text"
            value={formData.publisher}
            onChange={handleChange}
            placeholder="Publisher"
            maxLength={50}
            className="mb-4 border-slate-200 dark:border-slate-700"
          />
        </div>
        <div>
          <label htmlFor="publishedYear" className="block text-sm font-bold text-slate-500 dark:text-slate-400">
            Published Year
          </label>
          <Input
            name="publishedYear" // `name` 属性を追加
            type="number"
            value={formData.publishedYear}
            onChange={handleChange}
            placeholder="Published Year"
            className="mb-4 border-slate-200 dark:border-slate-700"
          />
        </div>
        <div>
          <label htmlFor="postTitle" className="block text-sm font-bold text-slate-500 dark:text-slate-400">
            Post Title
          </label>
          <Textarea
            name="postTitle" // `name` 属性を追加
            value={formData.postTitle}
            onChange={handleChange}
            placeholder="Post Title"
            maxLength={500}
            className="mb-4 border-slate-200 dark:border-slate-700"
          />
        </div>
        <div>
          <label htmlFor="postContent" className="block text-sm font-bold text-slate-500 dark:text-slate-400">
            Post Content
          </label>
          <Textarea
            name="postContent" // `name` 属性を追加
            value={formData.postContent}
            onChange={handleChange}
            placeholder="Post Content"
            maxLength={2000}
            className="mb-4 border-slate-200 dark:border-slate-700"
          />
        </div>
        <div className="flex">
          <Button 
            type="submit"
            className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded flex-auto"
          >
            {editMode ? "Edit Post" : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
