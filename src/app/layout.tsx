import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Header from "@/app/ui/Header";
import TopNav from "@/app/ui/TopNav";
import Footer from "@/app/ui/Footer";
import { CardContextProvider } from "@/app/context/CardContext";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Wiliam Bertolo's Portfolio",
	description: "Created with NextJS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	return (
		<CardContextProvider>
			<html lang="en">
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-300 transition-all duration-100`} >
					<div className="max-w-[960px] mx-auto text-left min-h-screen pb-[100px]">
						<Header />
						<TopNav />
						{children}
					</div>
					<Footer />
				</body>
			</html>
		</CardContextProvider>
	);
}
