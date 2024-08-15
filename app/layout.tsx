import Navbar from "@/components/navbar";
import "./globals.css";
import { inter, karla } from "@/lib/fonts";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Thotbit",
  description:
    "Think in bites, share in notes. Thotbit is a modern note-sharing platform for developers. Thotbit allows people to share their knowledge, insights, and experiences through brief notes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`min-h-screen w-screen bg-background font-sans text-base text-fg antialiased ${inter.variable} ${karla.variable}`}
      >
        <Navbar />
        <main className="container h-full max-h-screen max-w-screen-lg overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
