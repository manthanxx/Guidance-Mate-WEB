/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Cal Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        shell: '#f6f8fb',
        ink: '#0f172a',
      },
      boxShadow: {
        'soft-deep': '0 10px 30px rgba(15, 23, 42, 0.08), 0 24px 70px rgba(15, 23, 42, 0.08)',
        'glass-card': '0 2px 4px rgba(15,23,42,0.03), 0 16px 40px rgba(15,23,42,0.08)',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate3d(0px, 0px, 0)' },
          '50%': { transform: 'translate3d(0px, -8px, 0)' },
        },
      },
      animation: {
        drift: 'drift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
