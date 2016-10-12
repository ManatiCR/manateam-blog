# manateam-blog
#Manateam Blog, a decoupled D8 with Angular JS :)

## Create local environment:
- Ensure you're running node 0.12 (you can install it using nvm: https://github.com/creationix/nvm)
- Run `npm install && bower install` (If you don't have bower installed you should globally install it first: npm install -g bower-cli)
- Run desired Grunt tasks:
  * `grunt serve`: Get a server to test the existing and upcoming code in your local environment. This contains watch so any changes you do to tour scss will be automatically compiled and shown in browser in the next reload.
  * `grunt build`: Build the project. It doesn't setup a server.
  * `grunt`: The default task runs jshint and grunt build.

## Backend
It's actually running at http://test-manatiblog.pantheonsite.io/api/ Ask for access if needed.
