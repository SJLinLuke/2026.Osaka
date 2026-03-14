import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

// Get build info
const getBuildInfo = () => {
  try {
    const commitHash = execSync('git rev-parse --short HEAD').toString().trim()
    const buildTime = new Date().toISOString().replace('T', ' ').substring(0, 19)
    return { commitHash, buildTime }
  } catch {
    return { commitHash: 'unknown', buildTime: new Date().toISOString() }
  }
}

const { commitHash, buildTime } = getBuildInfo()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/2026.Osaka/',
  define: {
    'import.meta.env.VITE_COMMIT_HASH': JSON.stringify(commitHash),
    'import.meta.env.VITE_BUILD_TIME': JSON.stringify(buildTime),
  },
})
