import Link from "next/link";
import LoginForm, { LoginSchema } from "./_components/LoginForm";
import { z } from "zod";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default function Login() {
  const singnIn = async (data: z.infer<typeof LoginSchema>) => {
    "use server";

    const { email, password } = data;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // handle login error
    }

    return redirect("/");
  };

  return (
    <div className="w-full max-w-lg space-y-5 rounded-2xl bg-surface p-9 shadow">
      <div className="space-y-1 text-center">
        <h3 className="text-3xl font-bold">Welcome back</h3>
        <p className="mx-auto max-w-xs text-subtle">
          Login with your email and password to continue sharing Notes
        </p>
      </div>

      <LoginForm signIn={singnIn} />
      <div className="flex justify-center gap-1 text-center">
        <p>New to ThotBit?</p>
        <Link href="/signup" className="text-secondary hover:underline">
          Create account
        </Link>
      </div>
    </div>
  );
}
