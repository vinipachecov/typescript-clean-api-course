# Nodejs Typescript TDD Clean Architecture SOLID course

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