"use client";

import { createContext } from "react";

interface Theme {
	mode: "dark" | "light";
	toggleMode: () => void;
}

export const ThemeContext = createContext<Theme | undefined>(
	undefined
);
