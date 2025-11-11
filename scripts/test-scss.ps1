<#
scripts/test-scss.ps1

Tiny smoke test for SCSS pipeline and compiled CSS.

What it does:
- Attempts to run a Jekyll build using `bundle exec jekyll build` or `jekyll build`.
- If Jekyll is not available, it falls back to checking for `assets/css/main.css`.
- Verifies that the compiled CSS contains selectors `.sidebar`, `.main-content`, and `.keep-grid`.

Usage (PowerShell):
  pwsh.exe -File .\scripts\test-scss.ps1
#>

Write-Host "Starting SCSS smoke test..."

$cwd = Split-Path -Parent $MyInvocation.MyCommand.Definition
Push-Location $cwd\.. | Out-Null

$built = $false

if (Get-Command bundle -ErrorAction SilentlyContinue) {
    Write-Host "Running: bundle exec jekyll build"
    try {
        bundle exec jekyll build 2>&1 | Tee-Object -Variable out
        $built = $true
    } catch {
        Write-Host "bundle exec jekyll build failed or not available."
    }
} elseif (Get-Command jekyll -ErrorAction SilentlyContinue) {
    Write-Host "Running: jekyll build"
    try {
        jekyll build 2>&1 | Tee-Object -Variable out
        $built = $true
    } catch {
        Write-Host "jekyll build failed."
    }
} else {
    Write-Host "Jekyll not found. Skipping build step and checking assets/css/main.css directly."
}

# Determine which CSS to check: prefer _site copy (if built), else repo asset
if ($built -and (Test-Path "_site/assets/css/main.css")) {
    $cssPath = "_site/assets/css/main.css"
} elseif (Test-Path "assets/css/main.css") {
    $cssPath = "assets/css/main.css"
} else {
    Write-Error "No compiled CSS found. Expected _site/assets/css/main.css or assets/css/main.css"
    Pop-Location | Out-Null
    exit 2
}

Write-Host "Checking compiled CSS at: $cssPath"

$css = Get-Content $cssPath -Raw

$checks = @('.sidebar', '.main-content', '.keep-grid')
$failed = @()
foreach ($s in $checks) {
    if ($css -notmatch [regex]::Escape($s)) { $failed += $s }
}

if ($failed.Count -eq 0) {
    Write-Host "SMOKE TEST PASS: compiled CSS contains expected selectors." -ForegroundColor Green
    Pop-Location | Out-Null
    exit 0
} else {
    Write-Host "SMOKE TEST FAIL: missing selectors: $($failed -join ', ')" -ForegroundColor Red
    Pop-Location | Out-Null
    exit 3
}
