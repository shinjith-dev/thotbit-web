import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      {user.user_metadata.username}
      <form action={signOut}>
        <button className="rounded-md bg-primary px-4 py-2 text-primary-fg no-underline hover:bg-primary/90">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="flex rounded-md bg-primary px-3 py-2 text-primary-fg no-underline hover:bg-primary/90"
    >
      Login
    </Link>
  );
}
