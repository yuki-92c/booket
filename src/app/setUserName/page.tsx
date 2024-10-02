import { UserNameForm } from "@/components/UserNameForm";
import { auth } from "@/auth"
export default async function() {
  const session = await auth();
  let userId;
  if(session && session.user) {
    userId = session.user.id;
  }
  
  return (
    <div className="container mx-auto p-4">
      <p>{userId}</p>
      <UserNameForm userId={userId || ""}/>
    </div>
  )

}
