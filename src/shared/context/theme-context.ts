"use client";

import { createContext, Dispatch, SetStateAction } from "react";

export type ThemeMode = "dark" | "light" | "system";

interface Theme {
	mode: ThemeMode;
	setMode: Dispatch<SetStateAction<ThemeMode>>;
}

export const ThemeContext = createContext<Theme | undefined>(
	undefined
);
