import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Minify and obfuscate output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.log
        drop_debugger: true  // Remove debugger statements
      },
      mangle: {
        // Name mangling for better obfuscation
        toplevel: true,
        safari10: true
      },
      output: {
        comments: false  // Remove comments
      }
    },
    // Split code into smaller chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react']
        }
      }
    },
    // Source map setting for production
    sourcemap: false
  }
});