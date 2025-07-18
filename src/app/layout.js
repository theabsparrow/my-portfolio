import "./globals.css";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";
import { Inconsolata } from "next/font/google";
import { Toaster } from "sonner";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export const metadata = {
  title: "Abul Bashar",
  description:
    "I'm Abul Bashar, a full-stack web developer specializing in JavaScript, TypeScript, React, Next.js, and Node.js. Explore my portfolio to see modern, scalable, and responsive web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const applied = theme === 'dark' || (theme === 'system' && isDark) ? 'dark' : '';
                document.documentElement.className = applied;
                document.documentElement.setAttribute('data-theme', applied || 'light');
              })();
            `,
          }}
        />
      </head>
      <body className={`${inconsolata.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
