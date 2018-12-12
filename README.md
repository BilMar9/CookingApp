# Martin Bilik: Logbook
This project is a follow-up on the [The Complete JavaScript Course 2018: Build Real Projects!](https://www.udemy.com/the-complete-javascript-course/) by Jonas Schmedtmann.
## Init
Please run:
* npm install
* npm start
## Lesson 1: Project structure & Git workflow
After `git clone` of the repository I tried to run `npm install`. After doing this, all installed node_modules were included in the git repository. The `/dist` folder is part of the git sources too. Dist stands for either distribution or build -> usually this is the compiled version of your sources and it shouldn't be part of your git. If you delete `/dist`, your static assets (images, css, ...) are gone. Move you sources away from dist. Dist should be created by running `npm run build`.

- [x] add node_modules to .gitignore
- [ ] move static assets from dist into a sepparate directory, e.g. /src/assets
- [ ] webpack builder should move static assets into dist along the compiled javascript

We will be using [Feature branching](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). To be able to work on this repository with you:

- [x] grant access to user pavolko
- [x] create a branch named `feat/projectStructure` and push all your changes into this branch (tasks will follow later in this text).
- [x] create a pull request afterwards and add me as reviewer
