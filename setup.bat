@echo off
echo ========================================
echo Medieval Portfolio Setup Script
echo ========================================
echo.

echo [1/5] Creating directories...
if not exist "public\images" mkdir public\images
if not exist "public\images\projects" mkdir public\images\projects
if not exist "public\storage" mkdir public\storage
echo Done!
echo.

echo [2/5] Copying profile image...
if exist "..\image\cea.jpg" (
    copy "..\image\cea.jpg" "public\images\cea.jpg"
    echo Profile image copied!
) else (
    echo Warning: cea.jpg not found
)
echo.

echo [3/5] Copying project images...
if exist "..\image\Projects" (
    copy "..\image\Projects\*.png" "public\images\projects\"
    echo Project images copied!
) else (
    echo Warning: Projects folder not found
)
echo.

echo [4/5] Copying CV...
if exist "..\storage" (
    copy "..\storage\*.pdf" "public\storage\"
    echo CV copied!
) else (
    echo Warning: storage folder not found
)
echo.

echo [5/5] Installing dependencies...
call npm install
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start the development server, run:
echo npm run dev
echo.
echo Then open http://localhost:3000 in your browser
echo.
pause
