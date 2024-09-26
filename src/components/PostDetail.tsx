import { BookInfo } from "@/components/BookInfo";
import { LikeButton } from "@/components/LikeButton";
// import { IoMdHeartEmpty } from "react-icons/io";

export function PostDetail(
  props:{
    id: string;
    postTitle: string;
    postContent: string;
    userName: string;
    postDate: string;
    likeCount: number;
    bookTitle: string;
    author: string;
    publisher: string;
    publishedYear: number;
    liked: boolean;
  }
) {
  const day = new Date(props.postDate);
  const formattedDate = day.toLocaleDateString();
  console.log(props)

  return (
    <div>
      <div className="flex justify-end">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold pr-2">{props.userName}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{formattedDate}</p>
        <div className="flex items-center">
          <LikeButton postId={props.id} initialLikeCount={props.likeCount} initialLiked={props.liked} />
        
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button className="bg-slate-800 text-slate-100 dark:bg-slate-900 text-sm rounded-md px-3 py-1" onClick={
          async () => {
            try {
              const res = await fetch('/api/posts/' + props.id, {
                method: 'DELETE',
              });
              if (res.ok) {
                window.location.href = '/dashboard';
              }
            } catch (error) {
              console.error('Error deleting post:', error);
            }
          }
        }>
          Delete
        </button>
        <button className="bg-slate-400 text-slate-100 dark:bg-slate-600 text-sm rounded-md px-3 py-1">
          Edit
        </button>
      </div>

      <p className="font-bold text-xl">
        {props.postTitle}
      </p>
      <p className="text-base">
        {props.postContent}
      </p>
      <BookInfo
        bookTitle={props.bookTitle}
        author={props.author}
        publisher={props.publisher}
        publishedYear={props.publishedYear}
      />
    </div>
  );
}
