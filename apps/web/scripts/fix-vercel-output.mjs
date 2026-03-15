import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const appDir = path.resolve(currentDir, '..')
const functionDir = path.join(appDir, '.vercel', 'output', 'functions', '_render.func')
const sourceDir = path.join(functionDir, 'apps', 'web', 'dist')
const targetDir = path.join(functionDir, 'dist')
const configPath = path.join(functionDir, '.vc-config.json')

async function main() {
  const config = JSON.parse(await readFile(configPath, 'utf8'))

  if (config.handler !== 'apps/web/dist/server/entry.mjs') {
    return
  }

  await mkdir(targetDir, { recursive: true })
  await cp(sourceDir, targetDir, { recursive: true, force: true })

  config.handler = 'dist/server/entry.mjs'
  await writeFile(configPath, JSON.stringify(config, null, '\t'))
}

main().catch((error) => {
  console.error('Failed to normalize Vercel output for Astro web app.')
  console.error(error)
  process.exitCode = 1
})
