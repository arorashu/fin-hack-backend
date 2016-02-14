# fin-hack-backend

## Installation instructions to follow (for Ubuntu 14.04 LTS)
Should work on other versions too, but mongodb is not officially supported on 15.x for now and requires some work arounds.

## Requirements

### nodejs
  Installation
  
    curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
    sudo apt-get install -y nodejs
  
  After Installation
  
    sudo apt-get install nodejs-legacy
    
  Check that you have node and npm(comes with node) successfully installed:
    
    $ node -v
    $ npm -v
    
### mongodb
  Installation :
  Follow the official instructions at:
    https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
    
  Check mongo is installed by starting the server:
    $ mongod
    
### libkrb5-dev
  Required for mongoose (nodejs module)
  
    sudo apt-get install libkrb5-dev
    
### modules:

  Clone the project using git and cd into it:
  
      git clone https://github.com/codemerlin19/fin-hack-backend.git
    
      cd fin-hack-backend
    
  Run npm install - this installs all the dependencies of the project (found in package.json) :
    
      npm install
    
## Run

    npm start
