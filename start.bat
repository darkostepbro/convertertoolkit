@echo off
title OmniConvert Studio
echo Menjalankan OmniConvert Studio di Brave Browser...
if exist "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe" (
    start "" "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe" "%~dp0index.html"
) else (
    start "" "%~dp0index.html"
)
pause
