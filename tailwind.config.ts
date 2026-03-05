import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbff',
          100: '#d8f4ff',
          500: '#00a3d7',
          700: '#00789e',
          900: '#00455c',
        },
      },
    },
  },
  plugins: [],
}

export default config
