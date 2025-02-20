import { heroui } from "@heroui/react";

import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				title: ["Permanent Marker"],
				body: ["Nunito"],
			},
		},
	},
	plugins: [
		heroui({
			themes: {
				light: {
					// ...
					colors: {
						primary: {
							DEFAULT: "#6B30FA",
						},
					},
				},
				dark: {
					// ...
					colors: {},
				},
				// ... custom themes
			},
		}),
	],
} satisfies Config;
