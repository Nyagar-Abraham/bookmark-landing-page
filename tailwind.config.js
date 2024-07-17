/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '400px',
				sm: '590px',
				mdxl: '800px',
				md: '700px',
        mdl: '760px',
        xl:'1000px'
			},
		},
	},
	plugins: [],
};
