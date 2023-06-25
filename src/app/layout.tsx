import "@/scss/globals.scss";
import { Metadata } from "next";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
