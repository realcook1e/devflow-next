"use client";

import { ThemeContext, ThemeMode } from "@/shared/context";
import { useEffect, useState } from "react";

export const ThemeProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [mode, setMode] = useState<ThemeMode>(
		localStorage.theme || "system"
	);

	const handleThemeChange = () => {
		document.documentElement.classList.remove(
			...document.documentElement.classList
		);
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)")
					.matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.add("light");
		}
	};

	useEffect(() => {
		handleThemeChange();
	}, [mode]);

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
