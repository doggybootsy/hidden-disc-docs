# JS Discord Snippets
A little folder for all the snippets I have listed on the main README file, as well as a few extras. A table of contents of sorts can be found below.

### General Webpack
[Finding functions by calling general terms](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/fuzzyFnSearch.js)
```js
fuzzyFnSearch("getCurrentUser");
```

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

### Channels
[Getting hidden channels](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/findHiddenChannels.js)
```js
console.log(findHiddenChannels("1234guildID5678"));
```

### Invites
[Creating friend links](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/createFriendInvite.js)
```js
console.log(`Created a friend invite! https://discord.gg/${(await createFriendInvite()).code}`)
```

### Experiments
[Toggling dev mode between on/off](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/toggleDevMode.js)
```js
toggleDevMode(); // if dev mode isnt enabled, it enables it. if it is enabled, it disables it.
```

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

### Misc. JS
[Getting all added JavaScript properties to a window](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/getAddedWindowValues.js)
```js
console.log(getAddedWindowValues());
```
[Getting all endpoints, + more about endpoints](https://github.com/13-05/hidden-disc-docs/blob/main/internals/endpoints.md)
```txt
N/A, CLICK ABOVE LINK FOR MORE INFORMATION.
```
