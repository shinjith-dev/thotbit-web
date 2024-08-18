import { UserStoreContext } from "@/providers/user-provider";
import { UserStore } from "@/stores/user";
import { useContext } from "react";
import { useStore } from "zustand";

export const useUserStore = <T>(selector: (store: UserStore) => T): T => {
  const userStoreContext = useContext(UserStoreContext);

  if (!userStoreContext) {
    throw new Error(`useUserStore must be used within UserStoreProvider`);
  }

  return useStore(userStoreContext, selector);
};
