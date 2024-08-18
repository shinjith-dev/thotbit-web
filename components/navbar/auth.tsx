import UpdateUser from "./update-user";
import AuthButton from "./user";
import { createClient } from "@/utils/supabase/server";

export default async function Auth() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex items-center justify-between text-sm">
      <UpdateUser user={user} />
      <AuthButton user={user} />
    </div>
  );
}
