param(
    [Parameter(Mandatory=$true)]
    [string]$Message
)

# Stage all changes
Write-Host "Staging all changes..."
git add .

# Commit with provided message
Write-Host "Committing with message: $Message"
git commit -m "$Message"

# Push to current branch
Write-Host "Pushing to remote..."
git push

Write-Host "Done."
