/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			lineClamp: {
				7: '7',
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
			},
		},
	},
	variants: {
		lineClamp: ['responsive'],
	},
	plugins: [require('@tailwindcss/line-clamp')],
	mode: 'jit',
	darkMode: 'class',
}
