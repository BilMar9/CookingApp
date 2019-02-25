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
- [x] *go through https://scrimba.com/g/gintrototypescript*
- [x] *introduce TypeScript into the Forkify project*
- [x] *turn all .js files into .ts files and make the project correctly compile bundled js just like in previous lesson*
- [x] *run compiled TypeScript application and make sure everything runs*
## Lesson 3: The new UI
In branch `example/newUi` you'll find two new components:
* interface *Widget*, which simply forces the class which implements it to have an element() method which creates content injectible into DOM: HTMLElement
* helper function *element()*, which takes string as input and outputs - again - HTMLElement
Both of these two will form the core building blocks of our new UI.
- [x] *see example/newUi*
- [x] *understand the concept of Widget and element()*
- [x] *split the current Ui into independent building blocks, such as Header, Footer, LeftPanel, MiddlePanel, RightPanel or similar*
- [x] *for each of the above mentioned - turn them into new Ui => make them implement Widget and make them look the same as the original UI*
- [x] *for each of the above mentioned - when done, create a PR into master*
## Lesson 4: Bind Ui and App
We have successfully implemented the new UI based on the Widget interface building blocks. Now we need to make it working again. We will be using the so called Signal-Slot pattern.
- [x] *see signal.ts and make yourself familiar with it*
- [x] *create a class App and put all non-ui related code in there (e.g. API calls)*
- [x] *join your Ui components and App methods together via SignalSlots in index.ts*
