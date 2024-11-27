import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        historyApiFallback: true, // Mengarahkan rute SPA ke index.html
    },
});
