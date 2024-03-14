import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { cookies } from "next/headers";
import AppProvider from "./AppProvider";
import { redirect, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter()
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  // if (!sessionToken) {
  //   redirect('/')
  // }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AppProvider inititalSessionToken={sessionToken?.value}>
          {children}
        </AppProvider>
        <Footer />
      </body>
    </html>
  );
}