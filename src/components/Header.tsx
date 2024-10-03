import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";
import SignIn from "./SignIn";

export default function Header() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <Link href={"/dashboard"}>
          <h1 className="text-3xl font-bold mb-4">Booket</h1>
        </Link>
        <div className="flex flex-row items-center justify-center gap-2">
          <SignIn />
          <ThemeSwitch />
        </div>
      </div>
      {/* <div className="flex justify-end">
        <div className="p-2 rounded-md dark:border-2 dark:border-slate-300 bg-emerald-400 dark:bg-emerald-700 w-36 items-center justify-center flex">
          <Link href={"/newPost"}>Create a Post</Link>
        </div>
      </div> */}
    </div>
  );
}
