'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"

const PostFormProps = z.object({
  bookTitle: z.string(),
  author: z.string(),
  publisher: z.string(),
  publishedYear: z.number().default(2021),
  postTitle: z.string(),
  postContent: z.string(),
});

export function PostForm(
  props: z.infer<typeof PostFormProps>
) {
  const [bookTitle, setBookTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [publishedYear, setPublishedYear] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const data = {
      bookTitle,
      author,
      publisher,
      publishedYear,
      postTitle,
      postContent,
    }
    console.log(data)

    // Reset the form
    setBookTitle('')
    setAuthor('')
    setPublisher('')
    setPublishedYear('')
    setPostTitle('')
    setPostContent('')

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-8">
        <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700">
        Book Title
        </label>
        <Input
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="Book Title"
          maxLength={50}
          className="mb-4"
        />
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
        Author
        </label>
        <Input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          maxLength={50}
          className="mb-4"
        />
        <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">
        Publisher
        </label>
        <Input
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          placeholder="Publisher"
          maxLength={50}
          className="mb-4"
        />
        <label htmlFor="publishedYear" className="block text-sm font-medium text-gray-700">
        Published Year
        </label>
        <Input
          type="number"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
          placeholder="Published Year"
          maxLength={4}
          className="mb-4"
        />
        <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700">
        Post Title
        </label>
        <Textarea
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="Post title"
          maxLength={500}
          className="mb-4"
        />
        <label htmlFor="postContent" className="block text-sm font-medium text-gray-700">
        Post Content
        </label>
        <Textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Post content"
          maxLength={2000}
          className="mb-4"
        />
        <div className='flex'>
          <Button 
            type="submit"
            className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded flex-auto"
          >
              Create Post
          </Button>
        </div>

      </form>
    </div>
  )
}
