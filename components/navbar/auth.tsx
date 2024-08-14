import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";

export default async function Auth() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex items-center justify-between text-sm">
      {isSupabaseConnected && <AuthButton />}
    </div>
  );
}
