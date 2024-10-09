import { Card, CardFooter, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { IPost } from "@/app/types/posts";


export function PostCard(
  props: IPost
  
) {
  // console.log("props", props);
  return (
    <Link href={`/posts/${props.id}`}>
      <Card>
        <CardContent>
          <p className="">{props.postTitle}</p>
        </CardContent>
        <CardFooter>

          <p>{props.user.name}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{props.postDate}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{props.likeCount} Likes</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
