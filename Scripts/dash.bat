
@ECHO OFF

echo ##############################
echo # 1 .- instalar dependencies #
echo # 2 .- instalar nodeJs       #
echo # 3 .- instalar npm          #
echo # 4 .- instalar git          #
echo # 5 .- varias opciones       #
echo ##############################


set /p option=Select an option (1-3):

if "%option%" == 1 goto dependencies
if "%option%" == 2 goto nodeJs
if "%option%" == 3 goto npm
if "%option%" == 4 goto git
if "%option%" == 5 goto variasOpciones


:dependencies
npm install
pause > nul
exit

:nodeJs
winget search node.js
winget install OpenJS.NodeJS.LTS
pause > nul
exit

:npm 
winget install npm
pause > nul
exit


:git
winget install -e --id git.git
pause > nul
exit
