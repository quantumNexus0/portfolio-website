import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/', // Ensure this matches your GitHub repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Specify output directory
    outDir: 'dist',  // This is where your production build files will go

    // Minify and obfuscate output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.log statements
        drop_debugger: true  // Remove debugger statements
      },
      mangle: {
        toplevel: true,  // Enable top-level variable/function name mangling
        safari10: true   // Enable Safari 10 compatibility for name mangling
      },
      output: {
        comments: false  // Remove comments from output
      }
    },
    // Split code into smaller chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react'] // If this is a large library, splitting it into a separate chunk makes sense
        }
      }
    },
    // Source map setting for production
    sourcemap: false
  }
});
