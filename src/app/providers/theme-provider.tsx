"use client";

import { ThemeContext } from "@/shared/context";
import { useEffect, useState } from "react";

export const ThemeProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [mode, setMode] = useState<"dark" | "light">("light");

	const handleThemeChange = () => {
		if (mode === "dark") {
			setMode("light");
		} else {
			setMode("dark");
		}
	};

	useEffect(() => {
		document.documentElement.classList.add(mode);
	}, [mode]);

	return (
		<ThemeContext.Provider
			value={{ mode, toggleMode: handleThemeChange }}
		>
			{children}
		</ThemeContext.Provider>
	);
};
