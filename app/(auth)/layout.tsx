import { FC } from "react";

const AuthLayout: FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<main
			className="flex min-h-screen w-full 
		items-center justify-center"
		>
			{children}
		</main>
	);
};

export default AuthLayout;
