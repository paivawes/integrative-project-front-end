import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      // Adicione o caminho para a dependência que está causando problemas
      '/home/wes/Documentos/facu/integrative-project-frontend/node_modules/.vite/deps/chunk-OIKMUA5O.js',
    ],
  },
  
})
