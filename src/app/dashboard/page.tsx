import { PostCard } from "@/components/PostCard";
export default function Home() {

  const posts = [
    {
      id: 1,
      postTitle: "Title1",
      userName: "Mehmet",
      postDate: "2024/12/12",
      likes: 12
    },
    {
      id: 2,
      postTitle: "Title2",
      userName: "Ahmet",
      postDate: "2024/12/12",
      likes: 12
    },
    {
      id: 3,
      postTitle: "Title3",
      userName: "Ali",
      postDate: "2024/12/12",
      likes: 12
    },
  ]
  return (
    <div className="container mx-auto p-4" >
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>


    </div>
  );
}
