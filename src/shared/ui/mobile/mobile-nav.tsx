import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "./../sheet";
import { Button } from "./../button";

import { NavContent } from "../nav-content";

const MobileNav: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Image
					src="/assets/icons/hamburger.svg"
					width={36}
					height={36}
					alt="Menu"
					className="invert-colors sm:hidden"
				/>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="background-light900_dark200 border-none">
				<Link
					href="/"
					className="flex items-center gap-1">
					<Image
						src="/assets/images/site-logo.svg"
						width={23}
						height={23}
						alt="Devflow"
					/>

					<p className="h2-bold text-dark100_light900 font-spaceGrotest">
						Dev<span className="text-primary-500">Flow</span>
					</p>
				</Link>
				<div>
					<SheetClose asChild>
						<NavContent type="navbar" />
					</SheetClose>

					<SignedOut>
						<div className="flex flex-col gap-3">
							<SheetClose asChild>
								<Link href="/sign-in">
									<Button className="small-medium btn-secondary no-focus min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
										<span className="primary-text-gradient">
											Log in
										</span>
									</Button>
								</Link>
							</SheetClose>

							<SheetClose asChild>
								<Link href="/sign-up">
									<Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 no-focus min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
										Sign up
									</Button>
								</Link>
							</SheetClose>
						</div>
					</SignedOut>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
