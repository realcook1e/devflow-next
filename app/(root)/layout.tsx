import React from "react";
import { LeftSidebar } from "@/widgets/left-sidebar";
import { Navbar } from "@/widgets/navbar";
import { RightSidebar } from "@/widgets/right-sidebar";

const Layout: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<main className="background-light850_dark100 relative">
			<Navbar />
			<div className="flex">
				<LeftSidebar />
				<section className="flex min-h-screen flex-1 flex-col pb-6 pt-36 max-md:pb-14 sm:px-14">
					<div className="mx-auto w-full max-w-5xl">
						{children}
					</div>
				</section>
				<RightSidebar />
			</div>
			Toaster
		</main>
	);
};

export default Layout;
