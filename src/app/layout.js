import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider,ClerkLoading,ClerkLoaded } from "@clerk/nextjs";
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nerd😁Login",
  description: "Next Auth with Clerk and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
