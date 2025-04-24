# check-updates.ps1
# Checks for new remote changes and notifies the user if their branch is behind

git fetch
$status = git status
if ($status -match "Your branch is behind") {
    Write-Host "🔔 [NOTIFICATION] New changes are available on the remote repository! Please run 'git pull' to update." -ForegroundColor Yellow
} else {
    Write-Host "✅ Your branch is up to date."
}
