// postcss.config.js (Como lo tenías)
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // 👈 ESTO es correcto si instalas el paquete
    autoprefixer: {},
  },
}