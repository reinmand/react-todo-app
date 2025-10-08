import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-todo-app/', // <- өз репоңызға сай өзгертіңіз
  plugins: [react()]
})
