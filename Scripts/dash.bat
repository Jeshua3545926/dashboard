
@ECHO OFF

echo #############################
echo # 1 .- Install dependencies #
echo # 2 .- install nodeJs       #
echo # 3 .- instalar npm         #
echo #############################


set /p option=Select an option (1-3):

if "%opcion%" == 1 goto dependencies
if "%opcion%" == 2 goto nodeJs
if "%opcion%" == 3 goto exit


:dependencies
npm install
pause > nul
exit

:nodeJs
winget search node.js
winget install OpenJS.NodeJS.LTS
pause > null
exit

:npm 
winget install npm
pause > null
exit




