import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      remotes: {
        core: 'http://localhost:4173/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
