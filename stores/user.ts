import { User } from "@supabase/supabase-js";
import { createStore } from "zustand";
import { persist } from "zustand/middleware";

export type UserState = {
  user: User | null;
};

export type UserActions = {
  update: (user: User | null) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  user: null,
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(
    persist(
      (set) => ({
        ...initState,
        update: (user) => set(() => ({ user })),
      }),
      { name: "auth" },
    ),
  );
};
