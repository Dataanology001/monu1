module.exports = {
  content: [
    './*.html',
    './js/**/*.js',
    './js/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4f46e5',   // indigo-600
          light: '#a5b4fc',  // indigo-300
        },
        accent: {
          DEFAULT: '#06b6d4', // cyan-500
          light: '#67e8f9',   // cyan-300
        },
        success: '#10b981', // emerald-500
        warning: '#f59e42', // orange-400
        danger: '#ef4444',  // red-500
        background: '#f8fafc', // slate-50
        card: '#fff',
        gradient1: '#6366f1', // indigo
        gradient2: '#a21caf', // violet-800
      },
    },
  },
  plugins: [],
}; 