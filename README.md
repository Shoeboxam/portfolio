###Setup instructions for Ubuntu 16.04

#### Python
Set up virtual environment
```
mkvirtualenv portfolio
workon portfolio
pip install -r requirements.txt
```

Save used packages
```
pip freeze > requirements.txt
```

#### NPM
Make sure node version 7.x+ is installed for ES2015 support first.

Install packages
```
npm install
```

### After Setup
Start the django server
```
workon portfolio
./runserver
```

Start webpack
```
workon portfolio
npm start
```
