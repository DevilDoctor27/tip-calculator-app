module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '21.25rem',
      },
      colors: {
        'clr-section': 'hsl(185,41%,84%)',
        'clr-section-hover': 'hsl(173, 61%, 77%)',
        'clr-primary': 'hsl(183,100%,15%)',
        'clr-secondary': 'hsl(184, 14%, 56%)',
        'clr-accent': 'hsl(172, 67%, 45%)',
        'clr-input': 'hsl(189, 41%, 97%)',
        'clr-placeholder': 'hsl(186, 14%, 43%)',
        'clr-error': 'hsl(12, 59%, 59%)',
      },
      fontFamily: { space: ['Space Mono', 'monospace'] },
      backgroundImage: {
        dollar: "url('/images/icon-dollar.svg')",
        person: "url('/images/icon-person.svg')",
      },
    },
  },
  plugins: [],
}
