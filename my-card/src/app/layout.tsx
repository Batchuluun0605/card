"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
