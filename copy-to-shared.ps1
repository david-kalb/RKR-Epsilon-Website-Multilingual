# PowerShell script to copy CRM folder to shared locations
# Excludes: node_modules, .env, .next, .github, .git
# Empties destination folders first (preserving git folders) for proper sync

$sourceDir = "C:\Work\RKR-Epsilon-Website-Multilingual"
$destinations = @(
    "C:\Shared\rkr\website"
)

$excludeDirs = @("node_modules", ".next", ".github", ".git")
$excludeFiles = @(".env")
$preserveDirs = @(".git", ".github")

Write-Host "Starting sync operation from $sourceDir" -ForegroundColor Green
Write-Host "Excluded directories: $($excludeDirs -join ', ')" -ForegroundColor Yellow
Write-Host "Excluded files: $($excludeFiles -join ', ')" -ForegroundColor Yellow
Write-Host "Preserved directories in destination: $($preserveDirs -join ', ')" -ForegroundColor Yellow
Write-Host ""

foreach ($destination in $destinations) {
    Write-Host "Syncing to: $destination" -ForegroundColor Cyan
    
    # Create destination directory if it doesn't exist
    if (!(Test-Path -Path $destination)) {
        New-Item -ItemType Directory -Path $destination -Force | Out-Null
        Write-Host "  Created directory: $destination" -ForegroundColor Gray
    } else {
        # Empty the destination folder, preserving .git and .github folders
        Write-Host "  Cleaning destination folder (preserving git folders)..." -ForegroundColor Gray
        
        # Get all items in destination except preserved directories
        $itemsToDelete = Get-ChildItem -Path $destination -Force | Where-Object {
            $_.Name -notin $preserveDirs
        }
        
        foreach ($item in $itemsToDelete) {
            try {
                Remove-Item -Path $item.FullName -Recurse -Force -ErrorAction Stop
            } catch {
                Write-Host "  [WARNING] Could not delete: $($item.FullName)" -ForegroundColor Yellow
            }
        }
        Write-Host "  Destination cleaned." -ForegroundColor Gray
    }
    
    # Build robocopy exclude parameters
    $excludeParams = @()
    foreach ($dir in $excludeDirs) {
        $excludeParams += "/XD"
        $excludeParams += $dir
    }
    foreach ($file in $excludeFiles) {
        $excludeParams += "/XF"
        $excludeParams += $file
    }
    
    # Use robocopy for efficient copying
    # /E - Copy subdirectories, including empty ones
    # /XD - Exclude directories
    # /XF - Exclude files
    # /NDL - No directory list (cleaner output)
    # /NP - No progress (cleaner output)
    # /R:2 - Retry 2 times on failed copies
    # /W:3 - Wait 3 seconds between retries
    $robocopyArgs = @(
        $sourceDir,
        $destination,
        "/E",
        "/NDL",
        "/NP",
        "/R:2",
        "/W:3"
    ) + $excludeParams
    
    $result = robocopy @robocopyArgs
    
    # Robocopy exit codes: 0-7 are success, 8+ are errors
    $exitCode = $LASTEXITCODE
    if ($exitCode -lt 8) {
        Write-Host "  [SUCCESS] Successfully synced to $destination" -ForegroundColor Green
    } else {
        Write-Host "  [ERROR] Error syncing to $destination (Exit code: $exitCode)" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "Sync operation completed!" -ForegroundColor Green
