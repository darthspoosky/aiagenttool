# quick-commit.ps1
# Stages all changes, prompts for a commit message, commits, and pushes to the current branch.
# Usage: Run from the project root or relevant subdirectory.

# Stage all changes
git add .

# Prompt for commit message
$commitMsg = Read-Host "Enter commit message (or leave blank for auto-message)"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "Quick commit on $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
}

# Commit
try {
    git commit -m "$commitMsg"
} catch {
    Write-Host "Nothing to commit or an error occurred." -ForegroundColor Yellow
    exit 1
}

# Push
git push

Write-Host "All changes committed and pushed!" -ForegroundColor Green
