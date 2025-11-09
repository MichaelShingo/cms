import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "./providers";

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Better Auth Starter",
  description: "Next.js + Better Auth + Shadcn UI + Tailwind CSS",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSansKR.variable} light`}
      suppressHydrationWarning
    >
      <body className={` antialiased`}>
        <NextTopLoader showSpinner={false} height={6} color="#000000" />
        <main className="min-h-screen light text-foreground bg-background">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
