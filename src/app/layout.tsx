import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Pets - Discover Cute & Playful Companions",
    template: "%s | The Pets",
  },
  description:
    "Explore adorable pets, playful cats, and wonderful furry companions. Discover their unique personalities, favorite activities, and lovable traits at The Pets.",
  keywords: [
    "pets",
    "cats",
    "kittens",
    "cute pets",
    "pet showcase",
    "furry companions",
    "cat lovers",
    "animal companions",
  ],
  authors: [{ name: "Monayem Kabir Khan" }],
  category: "Pets & Animals",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fredoka.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
