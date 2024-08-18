import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="w-full pt-20 sm:pt-24 md:pt-28">
      <div className="flex w-full items-center justify-center">{children}</div>
    </div>
  );
}
