import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "@/app/globals.css";
import { ThemeProvider } from "@/app/providers";

export const metadata: Metadata = {
	title: "DevFlow",
	description:
		"Devflow is a community-driven Q&A platform for developers. Get answers to your questions and share your knowledge with the community.",
	icons: {
		icon: "/favicon.ico",
	},
};

const inter = Inter({
	subsets: ["latin"],
	weight: [
		"100",
		"200",
		"300",
		"400",
		"500",
		"600",
		"700",
		"800",
		"900",
	],
	variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-spaceGrotesk",
});

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${spaceGrotesk.variable}`}
			>
				<ThemeProvider>
					<ClerkProvider
						appearance={{
							elements: {
								formButtonPrimary: "primary-gradient",
								footerActionLink:
									"primary-text-gradient hover:text-primary-500",
							},
						}}
					>
						{children}
					</ClerkProvider>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
