import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import {NextIntlClientProvider} from 'next-intl';
import "./globals.css";

import Navigation from "@/ui/navigation/navigation";

const notoSans = Noto_Sans_KR({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Moss",
    description: "My Toss",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();
    return (
        <html lang={locale}>
        <body className={`${notoSans.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
            <Navigation/>
            <div className="mt-[59px]">
                {children}
            </div>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}