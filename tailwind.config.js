const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					900: "#520187",
					800: "#5E1C9E",
					700: "#7224BF",
					600: "#C188F9",
					500: "#DDBBFE",
					300: "#D6BBFB",
					200: "#E9D7FE",
					100: "#F4EBFF",
					50: "#F9F5FF",
				},
				neutral: {
					900: "#0F0F0F",
					800: "#2E2E2E",
					700: "#525252",
					600: "#7A7A7A",
					500: "#A3A3A3",
					400: "#B8B8B8",
					300: "#D6D6D6",
					200: "#F0F0F0",
					100: "#FCFCFC",
				},
			},
			fontFamily: {
				sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
