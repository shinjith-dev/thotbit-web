"use client";
import { useUserStore } from "@/hooks/use-user-store";
import { User } from "@supabase/supabase-js";
import { useEffect } from "react";

interface Props {
  user: User | null;
}

export default function UpdateUser({ user }: Props) {
  const updateUser = useUserStore((state) => state.update);

  useEffect(() => {
    if (user) updateUser(user);
  }, [user]);

  return null;
}
