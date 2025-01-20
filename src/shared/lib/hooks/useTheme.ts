"use client";

import { ThemeContext } from "@/shared/context";
import { useContext } from "react";

export const useTheme = () => {
	const theme = useContext(ThemeContext);
	if (theme === undefined) {
		throw new Error(
			"useTheme must be used within a ThemeProvider"
		);
	}

	return theme;
};
