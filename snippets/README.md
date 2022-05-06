# JS Discord Snippets
A little folder for all the misc snippets that I don't have listed on the main README file. A table of contents of sorts can be found below.


### Modals
[Creating an input modal](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/createPromptModal.js)
```js
let yourFavoriteColor = await createPromptModal("What's your favorite color?");
console.log(`Your favorite color is ${yourFavoriteColor}!`);
```
[Creating an alert modal](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/createAlertModal.js)
```js
let confirmedOrCanceled = createAlertModal("Well...", "Do you like the color red?");
console.log("boolean depicting whether the user confirmed (true) or canceled:", confirmedOrCanceled);
```

### Experiments
[Toggling an experiment between on/off](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/toggleExperiment.js)
```js
toggleExperiment("powermode", 2); // toggle experiment with id containing "powermode" to bucket 2
toggleExperiment("powermode"); // toggle experiment with id containing "powermode" to the default bucket, 1
```

[Getting all enabled experiments for every guild you're in](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/getAllGuildsExperiments.js) (CREDIT for the main function workings to [Rasync](https://github.com/RazerMoon?tab=repositories)!)
```js
let allGuildsWithTheirExperiments = getAllGuildsExperiments();
console.log(allGuildsWithTheirExperiments);
```

### Endpoint URLs
[Those're here](https://github.com/13-05/hidden-disc-docs/blob/main/internals/endpoints.md)
