// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [ /* ... */ ],
  theme: {
      extend: {
          colors: {
              // Nombre: 'rojo_principal'
              'rojo_principal': '#690D11', 
          },
      }, // <--- Importante: Cierre de extend
  }, // <--- Importante: Cierre de theme
  plugins: [],
}