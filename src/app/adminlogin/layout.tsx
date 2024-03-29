
import { Inter } from "next/font/google";
import NextAuthSessionProvider from "../../components/SessionProvider/index";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}