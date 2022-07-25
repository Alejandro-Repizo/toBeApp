import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname,  './src'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@styles': path.resolve(__dirname, './src/styles/components'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@types': path.resolve(__dirname, './src/types'),
      '@actions': path.resolve(__dirname, './src/actions'),
      '@firebaseConfig': path.resolve(__dirname, './src/firebase'),
      '@helper': path.resolve(__dirname, './src/helper')
    }
  },

  // Configuracion para el hotmodules en ubuntu 18
  server: {
    watch: {
      usePolling: true
    }
  }
})
