
@ECHO OFF

echo ##############################
echo # 1 .- instalar dependencies #
echo # 2 .- instalar nodeJs       #
echo # 3 .- instalar npm          #
echo # 4 .- instalar git          #
echo # 5 .- varias opciones       #
echo ##############################


set /p option=Select an option (1-3):

if "%opcion%" == 1 goto dependencies
if "%opcion%" == 2 goto nodeJs
if "%opcion%" == 3 goto npm
if "%opcion%" == 4 goto git
if "%opcion%" == 5 goto variasOpciones


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

:variasOpciones
set /p option=selecciona las opciones que quieres instalar:
if "%opcion%" ==  12 goto dependencies goto nodeJs
if "%opcion%" == 13 goto npm goto dependencies
if "%opcion%" == 23 goto nodeJs goto npm





 





