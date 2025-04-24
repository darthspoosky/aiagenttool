# quick-commit.ps1
param (
  [string]$Message = "Update: progress/status"
)
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git -C "D:\preptalkv1" add .
git -C "D:\preptalkv1" commit -m "$Message at $timestamp"
git -C "D:\preptalkv1" push
Write-Host "[$timestamp] All changes committed and pushed."
