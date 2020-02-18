# Nodejs Typescript TDD Clean Architecture SOLID course

This code is a follow on of the Udemy course NodeJs, Typescript, TDD, Clean Architecture e SOLID of Rodrigo Manguinho. The idea is to give a possible implementation of good practices of Clean Architecture with some good practices of TDD.


### Git Configs

- git config --list: show all config commands
- git config --system: change configs to all git projects in your machine
- git config --global: change configs to all git projects in your machine with your user
- git config --local: change configs to this project in your machine


To change configs with vscode: git config --global core.editor code.

This will open the vscode editor to edit git configs.

If you set code as your default option, don't forget to set flag --wait to avoid blank screen problems with vscode
editor = code --wait 


Git log configs:

H: full hash
h: short hash
%d: branch and tag references
%s: message
%cn: commiter name
%cr: commiter date
%C: color function

Config Example:

```
[core]
	editor = code --wait
[alias]
	s = !git status -s
	c = !git add --all && git commit -m 
	l = !git log --pretty=format:'%C(blue)%h %C(red)%d%C(yellow)%s - %C(cyan)%cn,%C(green) %cr '
```

- Use git-commit-msg-linter to follow some of the commit patters in https://www.conventionalcommits.org/en/v1.0.0/

### Typescript configurations

- "outDir": "./dist" : folder where typescript will output compiled js
- "module": "CommonJS" : allow users to use import syntax 
- "target": "es2019": generate code with ecmascript 2019 standard
- "esModuleInterop": true : allow modules in differnt standards to work
- "allowJs": true allow javascript


tsconfig.json file
```json
{
    "compilerOptions": {
        "outDir": "./dist",
        "module": "CommonJS",
        "target": "es2019",
        "esModuleInterop": true,
        "allowJs": true
    }
}
```

### Eslint configuration

- Usage of the lib eslint-config-standard-typescript to allow standardjs style with typescript

File example:
```json
{
    "extends": "standard-with-typescript",
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```

- Use husky for commit hooks
- Use lint-staged to run hooks only on staged files 

### Jest config:
Add libs 

- jest
- @types/jest
- ts-jest

init jest config with:
```
jest --init
```

The author also uses different jest configs for unit testing and integration:

- .spec for unit testing
- .test for integration test


### Design

By decoupling code into DDD with use cases and creating adapters behind the usage of libraries, the code becomes more resilient and sustainable due to the nature of the testing.
Doing this makes our code capable of changing libraries if we think it is useful without the fear of breaking any important feature of our Software. This is only possible when we wrap libraries into Adapters which will interfere on how the library (i.e encrypting, email validation etc...) calls the actual data and returns it. 



