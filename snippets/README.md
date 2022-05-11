# JS Discord Snippets
A little folder for all the snippets I have listed on the main README file, as well as a few extras. A table of contents of sorts can be found below.

### General Webpack
[Finding functions by general terms](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/findModules.js)
```js
findModules("gettoken"); // case insensitive and returns an array of results
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
console.log(`Created a friend invite! https://discord.gg/${(await createFriendInvite()).code}`);
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
/*
you can also do the below to see the guild you're in with the most experiments:

// BEGIN CODE
let allGuildsWithTheirExperiments = getAllGuildsExperiments();
let mostExperiments = {guild: undefined, count: undefined, experiments: undefined};
for (let x in guildsWithExps) {
  if (typeof mostExperiments.count !== "undefined") {
    if (mostExperiments.count < Object.keys(guildsWithExps[x]).length) {
      mostExperiments.guild = x;
      mostExperiments.count = Object.keys(guildsWithExps[x]).length;
      mostExperiments.experiments = guildsWithExps[x];
    }
  }
  else {
    mostExperiments.guild = x;
    mostExperiments.count = Object.keys(guildsWithExps[x]).length;
    mostExperiments.experiments = guildsWithExps[x];
  }
}
console.log(mostExperiments.guild, mostExperiments.count, mostExperiments.experiments);
// END CODE

as well as the above, you can find every guild with a specific experiment (by experiment id) like so:

// BEGIN CODE
let allGuildsWithTheirExperiments = getAllGuildsExperiments();
let experimentId = "experiment id to find guilds with";
for (let x in guildsWithExps) {
  let guildExperiments = guildsWithExps [x];
  if (guildExperiments[experimentId] != undefined) {
    console.log(x, guildsWithExps [x])
  }
}
// END CODE

*/
```

### Misc. JS
[Getting all Discord API endpoints, + more about endpoints](https://github.com/13-05/hidden-disc-docs/blob/main/internals/endpoints.md)
```txt
N/A, CLICK ABOVE LINK FOR MORE INFORMATION.
```
[Getting all added JavaScript properties to a window](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/getAddedWindowValues.js)
```js
console.log(getAddedWindowValues());
```
[Toggling HTTP request logging](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/toggleXMLHttpLogging.js)
```js
toggleXMLHttpLogging(); // enables if not enabled, disables if not disabled.
```
[Toggling Discord's simplest tracking methods on/off](https://github.com/13-05/hidden-disc-docs/blob/main/snippets/toggleTracking.js)
```js
toggleTracking(); // enables if not already enabled, disables if not already disables. returns a boolean mapping to the state of tracking: false = tracking is disabled, true = tracking was re-enabled
```
