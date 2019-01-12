# Martin Bilik: Logbook
This project is a follow-up on the [The Complete JavaScript Course 2018: Build Real Projects!](https://www.udemy.com/the-complete-javascript-course/) by Jonas Schmedtmann.
## Init
Please run:
* npm install
* npm start
## Lesson 1: Project structure & Git workflow
After `git clone` of the repository I tried to run `npm install`. After doing this, all installed node_modules were included in the git repository. The `/dist` folder is part of the git sources too. Dist stands for either distribution or build -> usually this is the compiled version of your sources and it shouldn't be part of your git. If you delete `/dist`, your static assets (images, css, ...) are gone. Move you sources away from dist. Dist should be created by running `npm run build`.

- [x] *add node_modules to .gitignore*
- [x] *add dist to .gitignore*
- [x] *move static assets from dist into a sepparate directory, e.g. /src/assets*
- [x] *webpack builder should move static assets into dist along the compiled javascript*

We will be using [Feature branching](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). To be able to work on this repository with you:

- [x] *grant access to user pavolko*
- [x] *create a branch named `feat/projectStructure` and push all your changes into this branch (tasks will follow later in this text).*
- [x] *create a pull request afterwards and add me as reviewer*
## Lesson 2: Application structure & TypeScript
In this lesson, we will try to make the current application a bit more readable and easy to understand. We will do a bit of refactoring. Refactoring is much easier with a higher level language than pure javascript. Read more about [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).
- [ ] *go through https://scrimba.com/g/gintrototypescript*
- [ ] *introduce TypeScript into the Forkify project*
- [ ] *turn all .js files into .ts files and make the project correctly compile bundled js just like in previous lesson*
- [ ] *run compiled TypeScript application and make sure everything runs*
## Lesson 3: Refactoring with TypeScript
I think we can do much better in terms of readability and quality of our code. TypeScript will help us do so immensly.
- [ ] *install NPM package Unused*
- [ ] *use `Unused` to identify all dead code and remove it*
- [ ] *find all unused exports and remove them*
- [ ] *create a class called Search and move all "search" related functionality into this class*
> Note: currently Forkify code consists of only exported functions and the whole code is not properly encapsulated and hard to read
## Lesson 4: Introduce a controller
Let's introduce a central controller to handle communication between classes, e.g. Search from previous example.
