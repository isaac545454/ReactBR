/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				github_dark: '#0d1117',
				card_github: '#8b949e',
			},
		},
	},
	plugins: [],
}
