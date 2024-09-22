import { BookInfo } from "@/components/BookInfo";
export function PostDetail(
  props:{
    id: string;
    postTitle: string;
    postContent: string;
    userName: string;
    postDate: string;
    likes: number;
    bookTitle: string;
    author: string;
    publisher: string;
    publishedYear: number;
  }
) {
  return (
    <div>
      <div className="flex justify-end">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold pr-2">{props.userName}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{props.postDate}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{props.likes}</p>
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
