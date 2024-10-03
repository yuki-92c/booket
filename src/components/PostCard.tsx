import { Card, CardFooter, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { IPost } from "@/app/types/posts";


export function PostCard(
  props: IPost
) {
  return (
    <Link href={`/posts/${props.id}`}>
      <Card>
        <CardContent>
          <p className="">{props.postTitle}</p>
        </CardContent>
        <CardFooter>
          {/* <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold pr-2">{props.user.name}</p> */}
          <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold pr-2">{props.user.customName}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{props.postDate}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{props.likeCount} Likes</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
