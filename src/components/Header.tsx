import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Header() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Booket</h1>
      <ThemeSwitch />
      <div className="p-2 rounded-md border border-red-300 w-36 items-center justify-center flex">
        <Link href={"/newPost"}>Create a Post</Link>
      </div>
      <Link href={"/dashboard"}>dashboard</Link>
    </div>
  );
}
