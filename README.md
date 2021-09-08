
# Scheduling
This is a proof of concept I did for a salon

## Installation
To install node on Mac, Windows, or Linux follow the instructions here: https://nodejs.org/en/download/

 To install MongoDB on Mac:
  
  Install homebrew : 
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
 Then
 ```bash
 brew tap mongodb/brew
 ```
 If you have already done this for a previous installation of MongoDB, you can skip this step

After that run
```bash
brew install mongodb-community@5.0
```
To start MongoDB
```bash
brew services start mongodb-community@5.0
```
To Stop MongoDB
```bash
brew services stop mongodb-community@5.0
```
for more information checkout https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

#### To install MongoDB on Windows
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/

```bash
  mkdir my_directory
  cd my_directroy
  git init
  git clone git@github.com:danieljanderson/Scheduling.git
  npm install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`= mongodb://localhost/scheduling


  
## Tech Stack

**Client:** JavaScript, jQuery, Bootstrap, HTML, CSS

**Server:** Node, Express, Heroku 

  
## Future Features

Future Improvements
- When the submit button is clicked it will take the user to the home screen.
- When submitted a message saying "Thank you" will be displayed
- Ability to edit delete appointments
- Ability to add breaks
- No conflicting appointments
  
## Screenshots

![App Screenshot](https://github.com/danieljanderson/Scheduling/blob/master/sadieapp.gif)

  
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

  
