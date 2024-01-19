import type { Metadata } from "next";
import { Abril_Fatface, Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import PageScrollProgress from "@/components/PageScrollProgress";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export const abril_fatface = Abril_Fatface({
    weight: "400",
    preload: false,
    subsets: ["latin"],
    variable: "--font-abril_fatface",
});
export const poppins = Poppins({
    weight: "300",
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Kanye West",
    description: "The website about YE",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link
                    rel="apple-touch-icon"
                    href="/apple-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </Head>
            <body
                className={cn(
                    "font-poppins",
                    abril_fatface.variable,
                    poppins.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                    <PageScrollProgress />
                </ThemeProvider>
            </body>
        </html>
    );
}
