Set-Location -Path "..\YouRa.Client"

Remove-Item -Path "wwwroot" -Recurse -Force

npm i
npm run build

dotnet run --launch-profile YouRa.Client.Cypress YouRa.Client
