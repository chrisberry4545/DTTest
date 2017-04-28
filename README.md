
I've used an angularjs seed to setup this app: https://github.com/angular/angular-seed

It uses npm and bower to install the dependencies.

Css files are included directly, as I've not setup a build process to compile scss.

To run the project use:

```
npm start
```

To run the unit tests run:

```
npm test
```

And to run the e2e tests first start the app (npm start) then run: 

```
npm run update-webdriver
```

and then

```
npm run protractor
```
