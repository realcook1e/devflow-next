import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

import { Button, NavContent } from "@/shared/ui";

const LeftSidebar: React.FC = () => {
	return (
		<aside className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 hidden h-screen flex-col justify-between overflow-y-auto border-r p-6 shadow-light-300 sm:flex lg:w-[266px] dark:shadow-none">
			<NavContent type="sidebar" />
			<SignedOut>
				<div className="flex flex-col gap-3">
					<Link href="/sign-in">
						<Button className="small-medium btn-secondary no-focus min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
							<Image
								src="/assets/icons/account.svg"
								alt="login"
								width={20}
								height={20}
								className="invert-colors lg:hidden"
							/>
							<span className="primary-text-gradient max-lg:hidden">
								Log in
							</span>
						</Button>
					</Link>

					<Link href="/sign-up">
						<Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 no-focus min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
							<Image
								src="/assets/icons/sign-up.svg"
								alt="sign up"
								width={20}
								height={20}
								className="invert-colors lg:hidden"
							/>
							<span className="max-lg:hidden">Sign up</span>
						</Button>
					</Link>
				</div>
			</SignedOut>
		</aside>
	);
};

export default LeftSidebar;
