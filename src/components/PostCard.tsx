import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
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
          <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold pr-2">{props.user.name}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{props.postDate}</p>
          <IoMdHeartEmpty className="text-slate-500 dark:text-slate-400"/>
          <p className="text-slate-500 dark:text-slate-400 text-sm pr-2">{props.likes}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
