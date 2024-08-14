import Auth from "./auth";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex items-center justify-between border-b border-border py-5">
      <h3 className="font-serif text-2xl font-bold">ThotBit</h3>

      <Auth />
    </div>
  );
}
