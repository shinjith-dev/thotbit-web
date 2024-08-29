"use client";
import { useUserStore } from "@/hooks/use-user-store";
import { useEffect } from "react";

interface Props {
  user: null;
}

export default function UpdateUser({ user }: Props) {
  const updateUser = useUserStore((state) => state.update);

  useEffect(() => {
    if (user) updateUser(user);
  }, [user]);

  return null;
}
