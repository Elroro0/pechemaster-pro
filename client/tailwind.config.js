module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#4B9CD3',
          DEFAULT: '#1E3A8A',
          dark: '#1E3A5A',
        },
        'nature': {
          green: '#2D5A27',
          blue: '#1F4B8A',
          brown: '#8B4513',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
