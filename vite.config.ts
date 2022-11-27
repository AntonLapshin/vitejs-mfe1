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
      // exposes: {
      //   './MFE1': './src/App.tsx',
      // },
      remotes: {
        core: 'https://vitejsvitehd44ix-1t3m--4173.local-credentialless.webcontainer.io/assets/remoteEntry.js',
      },
    }),
  ],
});
