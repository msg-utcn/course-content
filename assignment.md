# Assignment Week 2

The goal of this assignment is for you to get familiar with using the very basic blocks of web development.
We have attached some materials to assist you 

## Materials

### Reading

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Guide to CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [How to reference a JS file inside HTML](http://web.simmons.edu/~grabiner/comm244/weeknine/including-javascript.html)
- [Button OnClick Event](https://www.w3schools.com/jsref/event_onclick.asp)
- [How to modify the DOM using JS](https://www.w3schools.com/js/js_htmldom_html.asp)

### Videos (Alternative)

- [HTML in 100 seconds](https://www.youtube.com/watch?v=ok-plXXHlWw)
- [CSS in 100 seconds](https://www.youtube.com/watch?v=OEV8gMkCHXQ)
- [JS in 100 seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE)
- [TS in 100 seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)
- [Git Crash Course](https://www.youtube.com/watch?v=HkdAHXoRtos)
- [Async / Await / Promises](https://youtu.be/vn3tm0quoqE)

## Setup

- Clone your personal repository onto your machine
- Create a new branch from `main` and name it `week-2-assignment`
  - Commit & Push all your changes there 
- Create a folder under your project root `/examples`
- `cd ./examples`, you will work under this folder
- Create a pull request and notify us when you are done with the implementation

## Task Description 

### First Steps
- Setup the repository using NPM with `npm init`
- Install `typescript` using `npm install --save-dev typescript`
- Create a `tsconfig.json` with the same configuration as in the laboratory example

### Files
- Create a HTML document called `index.html`
  - It will just contain a button and an unordered list (initially empty)
- Create a Typescript file called `api-implementation.ts`
- Reference the javascript version (`api-implementation.js`) of the file inside your `index.html`

### Coding
- Choose an API from [the list of free apis](https://apipheny.io/free-api/)
- When you press the button make a `GET` request to retrieve any kind of data of your choosing **(a list of data)**
  - You will use `fetch` for this example (is supported by Node.js >= v18 and in the browser)
  - Create a function which modifies the DOM of the HTML page to insert the response as `<ul>` elements
- Add some css classes to make the elements (padding, margins, colors) to make it look nicer

## Further resource (for those interested)

- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [The Event Loop](https://youtu.be/cCOL7MC4Pl0)
- [Inheritance in JS: Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- ["This" in JS](https://www.w3schools.com/js/js_this.asp)
- [Hoisting in JS](https://www.w3schools.com/js/js_hoisting.asp)
