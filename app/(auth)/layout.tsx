import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-full pt-12 sm:pt-16 md:pt-20">
      <div className="flex w-full justify-center items-center">
        {children}
      </div>
    </div>
  )
}
