import Auth from "./auth";

export default function Navbar() {
  return (
    <div className="sticky py-5 items-center top-0 flex justify-between border-b border-border">
      <h3 className="font-serif text-2xl font-bold">ThotBit</h3>

      <Auth />
    </div>
  )
}
