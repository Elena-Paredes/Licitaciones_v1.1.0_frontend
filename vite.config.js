import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Servidor de desarrollo frontend en el puerto 3000
    proxy: {
      '/api': {
        target: 'http://localhost:3002',  // Backend corriendo en el puerto 3001
        changeOrigin: true,               // Cambia el origen de la solicitud al backend
        rewrite: (path) => path.replace(/^\/api/, ''),  // Reescribe las rutas
      },
    },
  },
  base: './', // Esto asegura que los assets se carguen correctamente
})
