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
    Write-Host "Jekyll not found. Will attempt local CSS compilation if possible, else check assets/css/main.css directly."
}

# Determine which CSS to check: prefer _site copy (if built), else repo asset
if ($built -and (Test-Path "_site/assets/css/main.css")) {
    $cssPath = "_site/assets/css/main.css"
} elseif (Test-Path "assets/css/main.css") {
    $cssPath = "assets/css/main.css"
} else {
    # Try local compilation paths: prefer global 'sass', else use npm-based build if package.json present
    $compiled = $false

    if (Get-Command sass -ErrorAction SilentlyContinue) {
        Write-Host "Found 'sass' CLI. Compiling assets/css/main.scss -> assets/css/main.css"
        try {
            sass assets/css/main.scss:assets/css/main.css --no-source-map
            $compiled = $true
        } catch {
            Write-Host "sass compilation failed: $_"
        }
    } elseif ((Test-Path "package.json") -and (Get-Command npm -ErrorAction SilentlyContinue)) {
        Write-Host "No global 'sass' found, but package.json exists. Running 'npm ci' then 'npm run build:css'"
        try {
            if (Test-Path "package-lock.json") {
                npm ci --no-audit --no-fund | Write-Host
            } else {
                npm install --no-audit --no-fund | Write-Host
            }
            npm run build:css | Write-Host
            if (Test-Path "assets/css/main.css") { $compiled = $true }
        } catch {
            Write-Host "npm-based build failed: $_"
        }
    } else {
        Write-Error "No compiled CSS found and no local build method available. Expected _site/assets/css/main.css or assets/css/main.css, or a local 'sass' / npm toolchain."
        Pop-Location | Out-Null
        exit 2
    }

    if ($compiled -and (Test-Path "assets/css/main.css")) {
        $cssPath = "assets/css/main.css"
    } else {
        Write-Error "Attempted local compilation but could not produce assets/css/main.css"
        Pop-Location | Out-Null
        exit 2
    }
}

Write-Host "Checking compiled CSS at: $cssPath"

$css = Get-Content $cssPath -Raw

$checks = @(
    '.sidebar', '.main-content', '.keep-grid', # Core Layout
    '.btn-primary', '.spawn-button', # Buttons Component
    '.form-checkbox-group', '.form-input', # Forms Component
    '.about-card', '.game-card', # Cards Component
    '.checklist-card', # Checklist Hub Component
    '.page-nav-link' # Page Nav Component
)
$failed = @()
foreach ($s in $checks) {
    if ($css -notmatch [regex]::Escape($s)) { $failed += $s }
}

if ($failed.Count -eq 0) {
    Write-Host "FULL TEST SUITE PASS: Compiled CSS contains all critical component classes." -ForegroundColor Green
    Pop-Location | Out-Null
    exit 0
} else {
    Write-Host "SMOKE TEST FAIL: missing selectors: $($failed -join ', ')" -ForegroundColor Red
    Pop-Location | Out-Null
    exit 3
}
