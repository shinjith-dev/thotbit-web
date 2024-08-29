import Link from "next/link";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { Button } from "../ui/button";

interface Props {
  user: User | null;
}

export default async function AuthButton({ user }: Props) {
  const signOut = async () => {
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      {user.user_metadata.username}
      <Button
        onClick={signOut}
        className="bg-destructive text-destructive-fg hover:bg-destructive/90"
      >
        Logout
      </Button>
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
