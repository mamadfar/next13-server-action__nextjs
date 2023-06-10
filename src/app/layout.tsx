import {ReactNode} from "react";
import './globals.scss'
import {Inter} from 'next/font/google'
import {Footer, Header} from "@/components";
import {Provider} from "@/context/Provider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Server Action',
    description: 'Server Action + Search + Sort + Pagination',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={`flex flex-col min-h-screen bg-gray-100 ${inter.className}`}>
        <Header/>
        <Provider>
            <main className="p-3">{children}</main>
        </Provider>
        <Footer/>
        </body>
        </html>
    )
}
