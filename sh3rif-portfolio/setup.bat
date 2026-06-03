@echo off
echo ========================================
echo sh3rif Portfolio Setup
echo ========================================
echo.

echo Installing dependencies...
npm install --legacy-peer-deps

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo Installation successful!
    echo ========================================
    echo.
    echo You can now run:
    echo   npm run dev    - Start development server
    echo   npm run build  - Build for production
    echo   npm run start  - Start production server
    echo.
) else (
    echo.
    echo ========================================
    echo Installation failed!
    echo ========================================
    echo.
    echo Please check your network connection and try again.
    echo Or run manually: npm install --legacy-peer-deps
    echo.
)

pause
