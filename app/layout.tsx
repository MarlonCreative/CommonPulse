import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Common Pulse — Musical field notebook",
  description: "Record music, edit rhythmic notation, keep spoken field notes, discover performances, and learn by participating.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
