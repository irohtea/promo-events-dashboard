import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="flex flex-col min-h-screen px-12 gap-16 font-[family-name:var(--font-geist-sans)]">
              <Sidebar />
              <main className="flex flex-col flex-auto py-16">
                {children}
              </main>
              <footer className="text-center text-sm text-gray-500">
                @2025 Nobel Events
              </footer>
            </div>
      </body>
    </html>
  );
}
