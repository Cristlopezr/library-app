/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'library-bg': 'url(assets/images/Biblioteca-Viva-Trébol.jpg)',
			},
			backgroundColor: {
				canvas: 'Canvas',
			},
			borderColor: {
				canvas: 'Canvas',
			},
		},
	},
	plugins: [],
};
