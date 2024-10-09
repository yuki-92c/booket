import { BookInfo } from "@/components/BookInfo";
import { LikeButton } from "@/components/LikeButton";
import { PostDetailButton } from "@/components/PostDetailButton";

export function PostDetail(
  props:{
    id: string;
    postTitle: string;
    postContent: string;
    // customName: string;
    userName: string;
    postDate: string;
    likeCount: number;
    bookTitle: string;
    author: string;
    publisher: string;
    publishedYear: number;
    liked: boolean;
    userId: string;
    loginUserId: string;
  }
) {
  const day = new Date(props.postDate);
  const formattedDate = day.toLocaleDateString();

  return (
    <div>
      <div className="flex justify-end">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold pr-2">{props.userName}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{formattedDate}</p>
      </div>
      <div className="flex items-center">
        <LikeButton postId={props.id} initialLikeCount={props.likeCount} initialLiked={props.liked} />
      </div>
      <div className="pb-4">
        {props.userId === props.loginUserId && (
          <PostDetailButton id={props.id} />
        )}
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
