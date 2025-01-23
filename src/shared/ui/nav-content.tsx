"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/shared/model/constants";
import { SheetClose } from "./sheet";

type NavContentType = "sidebar" | "navbar";

interface NavContentProps {
	type: NavContentType;
}

export const NavContent: React.FC<NavContentProps> = ({
	type,
}) => {
	const pathname = usePathname();

	return (
		<section
			className={`flex h-full flex-col gap-6 ${type === "navbar" ? "pt-16" : "flex-1 pt-32"}`}>
			{sidebarLinks.map(item => {
				const isActive =
					(pathname?.includes(item.route) &&
						item.route.length > 1) ||
					pathname === item.route;

				if (type === "navbar") {
					return (
						<SheetClose
							asChild
							key={item.route}>
							<Link
								href={item.route}
								className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}>
								<Image
									src={item.imgURL}
									alt={item.label}
									width={20}
									height={20}
									className={`${isActive ? "" : "invert-colors"}`}
								/>
								<p
									className={`${isActive ? "base-bold" : "base-medium"}`}>
									{item.label}
								</p>
							</Link>
						</SheetClose>
					);
				}

				return (
					<Link
						key={item.route}
						href={item.route}
						className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}>
						<Image
							src={item.imgURL}
							alt={item.label}
							width={20}
							height={20}
							className={`${isActive ? "" : "invert-colors"}`}
						/>
						<p
							className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}>
							{item.label}
						</p>
					</Link>
				);
			})}
		</section>
	);
};
