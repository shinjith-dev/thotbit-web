import Navbar from "@/components/navbar";
import "./globals.css";
import { inter, karla } from "@/lib/fonts";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Thotbit",
  description: "Think in bites, share in notes. Thotbit is a modern note-sharing platform for developers. Thotbit allows people to share their knowledge, insights, and experiences through brief notes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-background max-w-screen-lg text-fg text-base antialiased font-sans container ${inter.variable} ${karla.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
