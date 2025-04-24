# check-chat-changes.ps1
# Shows the latest change for backend and frontend chat files

$backendLog = git log -1 --pretty=format:"%h %an %ad %s" -- programnanager/pm-backend-chat.md
$frontendLog = git log -1 --pretty=format:"%h %an %ad %s" -- programnanager/pm-frontend-chat.md

Write-Host "Last change to pm-backend-chat.md:`n$backendLog`n"
Write-Host "Last change to pm-frontend-chat.md:`n$frontendLog`n"
