import { auth, signIn, signOut } from "@/auth"

export default async function SignIn() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  return user ? (
    // Signed in
    <>
      <p className="text-sm">Welcome <span className="font-bold">{user.name}</span> </p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="border rounded-md px-4 py-2">Sign Out</button>
      </form>
    </>
  ) : (
    // Not signed in
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="border rounded-md px-4 py-2">Sign In</button>
    </form>
  );
}
