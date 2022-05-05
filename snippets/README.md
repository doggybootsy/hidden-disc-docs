# JS Discord Snippets
A little folder for all the misc snippets that I don't have listed on the main README file. A table of contents of sorts can be found below.


### Modals
[Fn for creating an input modal](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/createPromptModal.js)
```js
let yourFavoriteColor = await createPromptModal("What's your favorite color?");
console.log(`Your favorite color is ${yourFavoriteColor}!`);
```

### Experiments
[Fn for toggling an experiment between on/off](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/toggleExperiment.js)
```js
toggleExperiment("powermode", 2); // toggle experiment with id containing "powermode" to bucket 2
toggleExperiment("powermode"); // toggle experiment with id containing "powermode" to the default bucket, 1
```
