import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'purple': '	#854dff',
      'grey': '#dbdbdb',
      'cream': 	'#f0f0f0',
    },
    extend: {
      fontFamily:{
        'poppins' : ['Poppins',  'sans-serif']
      },
    },
  },
  plugins: [],
}
export default config
