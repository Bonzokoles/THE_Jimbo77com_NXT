#!/usr/bin/env pwsh
# deploy-windows.ps1 - Deploy to Cloudflare Workers from Windows
# Patches @vercel/og wasm imports (Windows compat) + builds with webpack (Turbopack not supported by OpenNext)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "=== Step 1: Patch wasm imports ===" -ForegroundColor Cyan
$ogFile = "node_modules\next\dist\compiled\@vercel\og\index.edge.js"
if (Test-Path $ogFile) {
    $content = Get-Content $ogFile -Raw
    if ($content -match 'wasm\?module') {
        $content = $content.Replace('./resvg.wasm?module', './resvg.wasm').Replace('./yoga.wasm?module', './yoga.wasm')
        $content | Set-Content $ogFile -NoNewline
        Write-Host "  Patched wasm?module imports" -ForegroundColor Yellow
    } else { Write-Host "  Already patched" -ForegroundColor Green }
}

Write-Host "
=== Step 2: Build with OpenNext ===" -ForegroundColor Cyan
npx opennextjs-cloudflare build
if ($LASTEXITCODE -ne 0) { throw "Build failed" }

Write-Host "
=== Step 3: Deploy ===" -ForegroundColor Cyan
npx wrangler deploy
if ($LASTEXITCODE -ne 0) { throw "Deploy failed" }

Write-Host "
=== Deploy SUCCESSFUL ===" -ForegroundColor Green
