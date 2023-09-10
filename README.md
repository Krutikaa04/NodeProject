This is a project to understand the concepts of MERN Stack.

Steps Used -->
- Create a folder on local named NodeProject and open the vs code terminal and write the command "mkdir Backend". So a folder is created within which will contain all the backend files of the project.

STEPS FOR DOWNLOADING NODE AND NPM IN LOCAL SYSTEM-->
-- In chrome go for node download and download the lts version of it then install. for npm installation, open cmd and write the command "npm i download". npm will be downloaded.
-- to check whether they are properly installed, in cmd write "node -v" for node version and "npm --version" for npm version.

REFER TO THE EXPRESS DOCUMENTATION FOR BETTER UNDERSTANDING OF EXPRESS
- in the terminal write the command "npm init" so package.json fiel is generated and then "npm install express --save". this will download express.
- then "npm install nodemon --save". Nodemon is downloaded for the purpose of not having to restart the server manually and it will restart by itself when the file is changed.
- then use the command "npm install" so all files like node_modules and package-lock.json are downloaded.
- manually make a file named .gitignore and README.md in your folder.
- in the folder .gitignore, include node_modules so that when u push your project in github node_modules are ignored.
- you can write your project description in README.md file.
- in the file package.json, change the main to app.js instead of index.js and in scripts add 
"start": "nodemon app.js"   This will create a shortcut while running the code as we do not need to write "nodemon app.js" everytime but we can directly write "npm start" to run the file.
- make a file app.js and continue writing your code.