/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#2563eb', // Updated blue color
                'secondary': '#f8fafc',
                'text-primary': '#1e293b',
                'text-secondary': '#64748b',
                'border-color': '#e2e8f0',
                'accent': '#22c55e', // Green checkmark
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
            },
        },
    },
    plugins: [],
}