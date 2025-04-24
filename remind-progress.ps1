# remind-progress.ps1
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "[$timestamp] REMINDER: Please check your git status and update your progress in the appropriate chat and diary files."
git -C "D:\preptalkv1" status
Write-Host "If you have made progress, run:"
Write-Host "  git add <changed-files>"
Write-Host "  git commit -m 'Update: progress/status at $timestamp'"
Write-Host "  git push"
Write-Host "Also, update your diary and chat logs with any blockers, learnings, or status updates."
