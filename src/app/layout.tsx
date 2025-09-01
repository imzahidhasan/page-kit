import "./globals.css";
import { ThemeProvider } from "next-themes";
import { geistMono, geistSans } from "@/assets/fonts";
import { Analytics } from "@vercel/analytics/next";


export { metadata } from "@/data/metadata";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
