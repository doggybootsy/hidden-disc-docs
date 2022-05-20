# About
This is a repository with everything you need to know about abusing the Discord API and how it works!

If you have any suggestions or find any problems with these docs, feel free to open a GitHub issue!

**Note that nearly every topic covered in this document is against Discord's Terms of Service.**

### Credits
- [Dolfies](https://github.com/dolfies/)
- [MeguminSama](https://github.com/MeguminSama/)
- [ImLorio](https://github.com/ImLorio/)
- [Monst3red](https://github.com/Monst3red/)
- [LewisTehMinerz](https://github.com/LewisTehMinerz/)
- [Discord-Datamining](https://github.com/Discord-Datamining/)
- [DoggyBootsy](https://github.com/doggybootsy/)
- [PythonMCPI](https://github.com/pythonmcpi/)
- [ReallyAmused](https://www.reddit.com/user/ReallyAmused/)

## TOC
- [Help! I Can't Open The "Inspect Element" Console!](https://github.com/13-05/hidden-disc-docs#help-i-cant-open-the-inspect-element-console)
- [Other Docs](https://github.com/13-05/hidden-disc-docs#other-docs)
- [Tools](https://github.com/13-05/hidden-disc-docs#tools)
- [Self-Bots](https://github.com/13-05/hidden-disc-docs#self-bots-their-uses-risks-frameworks-and-some-communities)
- [Client Modding](https://github.com/13-05/hidden-disc-docs#client-modding)
- [Tokens](https://github.com/13-05/hidden-disc-docs#more-about-tokens)
- [UserIDs](https://github.com/13-05/hidden-disc-docs#more-about-userids)
- [Log-Ins](https://github.com/13-05/hidden-disc-docs#discord-and-log-ins-what-to-know--how-to-abuse-it-credit-monst3red)
- [The API](https://github.com/13-05/hidden-disc-docs#the-api)
- [Markdown](https://github.com/13-05/hidden-disc-docs#messages--markdown)
- [Discord's Webpack Implementation](https://github.com/13-05/hidden-disc-docs#discords-api-frontend-a-custom-webpack-implementation)
- [JavaScript Snippets](https://github.com/13-05/hidden-disc-docs/tree/main/snippets)

## Help! I Can't Open The "Inspect Element" Console!
Alright, so, Discord recently started automatically disabling inspect element for the Discord desktop app. If you'd like to re-enable it, do the following:
- **[Windows]** Go to `%APPDATA%\discord\settings.json`
- **[The Linux Kernel]** Go to `~/.config/discord/settings.json`, or if it's not there, go to `~/.var/app/com.discordapp.Discord/config/discord/settings.json`
- **[MacOS]** Go to `~/Library/Application Support/discord/settings.json`
- Delete the current data, and paste the following:
```json
{
"BACKGROUND_COLOR": "#202225",
"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true
}
```
- Reload/restart Discord, and you should be good! Try `CTRL` + `SHIFT` + `I`, and it'll launch.

Credit to [this Reddit comment](https://www.reddit.com/r/discordapp/comments/sc61n3/cant_inspect_element_anymore/hu4fw5x/), and also remember that each Discord app update will override the config file.

## Other Docs
Some more documentation about the Discord API can be found below (ranked by usefulness):
- [Luna's Docs](https://luna.gitlab.io/discord-unofficial-docs/)
- [Dolfies' Guild Members Writeup](https://discordpy-self.readthedocs.io/en/latest/migrating_from_dpy.html#guild-members) ~~stfu dolfies~~
- [Birdie's Webhook Docs](https://birdie0.github.io/discord-webhooks-guide/)
- [The Official Docs](https://discord.com/developers/docs/intro)

## Tools
Exploits and glitches can be found very simply. Some tools I use for this are [Burp Suite](https://portswigger.net/burp), [FireFox's Dev Tools](https://developer.mozilla.org/en-US/docs/Tools), and the [Python Requests Library](https://pypi.org/project/requests/). Also, pay special attention to any Discord API documentation; they'll be a great tool on your journey.

### Quick JS Snippet to Reveal Javascript Workings
The below snippet will show every object, function, and variable a certain website added, and log them.
```js
let getAddedWindowValues = () => {
    let defaultWindowArray = window.navigator.userAgent.toLowerCase().includes("chrome") ? ["window", "self", "document", "name", "location", "customElements", "history", "locationbar", "menubar", "personalbar", "scrollbars", "statusbar", "toolbar", "status", "closed", "frames", "length", "top", "opener", "parent", "frameElement", "navigator", "origin", "external", "screen", "innerWidth", "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "visualViewport", "screenX", "screenY", "outerWidth", "outerHeight", "devicePixelRatio", "clientInformation", "screenLeft", "screenTop", "defaultStatus", "defaultstatus", "styleMedia", "onsearch", "isSecureContext", "performance", "onappinstalled", "onbeforeinstallprompt", "crypto", "indexedDB", "webkitStorageInfo", "sessionStorage", "localStorage", "onbeforexrselect", "onabort", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload", "alert", "atob", "blur", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "captureEvents", "clearInterval", "clearTimeout", "close", "confirm", "createImageBitmap", "fetch", "find", "focus", "getComputedStyle", "getSelection", "matchMedia", "moveBy", "moveTo", "open", "postMessage", "print", "prompt", "queueMicrotask", "releaseEvents", "reportError", "requestAnimationFrame", "requestIdleCallback", "resizeBy", "resizeTo", "scroll", "scrollBy", "scrollTo", "setInterval", "setTimeout", "stop", "structuredClone", "webkitCancelAnimationFrame", "webkitRequestAnimationFrame", "chrome", "caches", "cookieStore", "ondevicemotion", "ondeviceorientation", "ondeviceorientationabsolute", "oncontextlost", "oncontextrestored", "getScreenDetails", "showDirectoryPicker", "showOpenFilePicker", "showSaveFilePicker", "originAgentCluster", "trustedTypes", "speechSynthesis", "onpointerrawupdate", "crossOriginIsolated", "scheduler", "openDatabase", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL"] : ["close", "stop", "focus", "blur", "open", "alert", "confirm", "prompt", "print", "postMessage", "captureEvents", "releaseEvents", "getSelection", "getComputedStyle", "matchMedia", "moveTo", "moveBy", "resizeTo", "resizeBy", "scroll", "scrollTo", "scrollBy", "getDefaultComputedStyle", "scrollByLines", "scrollByPages", "sizeToContent", "updateCommands", "find", "dump", "setResizable", "requestIdleCallback", "cancelIdleCallback", "requestAnimationFrame", "cancelAnimationFrame", "reportError", "btoa", "atob", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "queueMicrotask", "createImageBitmap", "structuredClone", "fetch", "self", "name", "history", "customElements", "locationbar", "menubar", "personalbar", "scrollbars", "statusbar", "toolbar", "status", "closed", "event", "frames", "length", "opener", "parent", "frameElement", "navigator", "clientInformation", "external", "applicationCache", "screen", "innerWidth", "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "screenLeft", "screenTop", "screenX", "screenY", "outerWidth", "outerHeight", "performance", "mozInnerScreenX", "mozInnerScreenY", "devicePixelRatio", "scrollMaxX", "scrollMaxY", "fullScreen", "ondevicemotion", "ondeviceorientation", "onabsolutedeviceorientation", "InstallTrigger", "sidebar", "visualViewport", "crypto", "onabort", "onblur", "onfocus", "onauxclick", "onbeforeinput", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadend", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onwheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onselectstart", "onselectionchange", "ontoggle", "onpointercancel", "onpointerdown", "onpointerup", "onpointermove", "onpointerout", "onpointerover", "onpointerenter", "onpointerleave", "ongotpointercapture", "onlostpointercapture", "onmozfullscreenchange", "onmozfullscreenerror", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "u2f", "onerror", "speechSynthesis", "onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload", "ongamepadconnected", "ongamepaddisconnected", "localStorage", "origin", "crossOriginIsolated", "isSecureContext", "indexedDB", "caches", "sessionStorage", "window", "document", "location", "top", "ASRouterMessage", "ASRouterAddParentListener", "ASRouterRemoveParentListener", "RPMSendAsyncMessage", "RPMAddMessageListener", "RPMRemoveMessageListener", "ContentSearchUIController", "ContentSearchHandoffUIController", "React", "ReactDOM", "PropTypes", "ReactTransitionGroup", "Redux", "ReactRedux", "NewtabRenderUtils"];
    let addedJs = {};
    Object.keys(window).filter(arrObj => defaultWindowArray.every(obj => obj != arrObj)).filter(arrObj => arrObj != "getAddedWindowValues").filter(arrObj => arrObj != "addedJs").filter(arrObj => arrObj != "getAddedWindowValues").forEach(arrObj => addedJs[arrObj.toString()] = window[arrObj]);
    return addedJs;
}

console.log(getAddedWindowValues());
```
On running the above in Discord's website or client, you should get something similar to the below logged to your console: 

![image](https://user-images.githubusercontent.com/64506392/166123281-70099e3b-1b23-4dc8-ab2d-54226721db7a.png)

This snippet works for every website. For example, this is what YouTube shows:

![image](https://user-images.githubusercontent.com/64506392/166123326-8c6696b0-32c2-4251-8e03-5166db5ad527.png)


## Self-bots: their uses, risks, frameworks, and some communities.
### Uses
A selfbot can be useful for quick Discord utilities; it's a bot running on a user account.
### Risks
A selfbot is always risky due to its being against Discord's [terms](https://discord.com/terms), although Discord won't notice unless you use it to carry out certain [risky actions](https://gist.github.com/13-05/c7691d633fd011e96aceebe889a5a4a9).
### Frameworks
- ~~[Discum.py](https://github.com/Merubokkusu/Discord-S.C.U.M) (powerful wrapper with lowest chance of getting caught, though hard to master) (example [here](https://github.com/13-05/hidden-disc-docs/blob/main/examples/example-discum.py))~~ developer has had less and less time to maintain this, so use with caution
- [Discord.py-Self](https://github.com/dolfies/discord.py-self) (same syntax as discord.py, adapted for support with user accounts, one of the most secure) (example [here](https://github.com/13-05/hidden-disc-docs/blob/main/examples/example-dpyself.py))
- [Anarchy.NET](https://github.com/not-ilinked/Anarchy) (powerful wrapper w/super low chance of getting caught, weird syntax though) (example [here](https://github.com/not-ilinked/Anarchy/blob/master/Example%20projects/GuildDuplicator/Program.cs))
- [Discord.JS-Selfbot-V13](https://github.com/aiko-chan-ai/discord.js-selfbot-v13) (seems to be one of the best discord.js forks for selfbot development) (example [here](https://github.com/aiko-chan-ai/discord.js-selfbot-v13#example))
- [Discord.JS-Pure](https://github.com/13-05/discord.js-pure) (discord selfbot wrapper written in plain browser javascript; it runs in the inspect element console and has the same level of interactivity with the client as a client mod, such as betterdiscord or powercord. i'm the dev of this lib and it kinda works, i havent gotten caught so far...) (example [here](https://github.com/13-05/discord.js-pure#example-code))
### Communities
- [Discord.py-Self Telegram](https://t.me/dpy_self_discussions)
- [r/Discord_Selfbots Subreddit](https://www.reddit.com/r/Discord_selfbots/)
- [Discord Previews (not really selfbot specific, mainly API stuff)](https://discord.gg/SqbvxCQP5u)

## Client Modding
I'm a bit too lazy and inexperienced with client mods to write an entire section about them. Luckily, someone already made a repo with a list of all the big client mods! Check that out [here](https://github.com/Discord-Client-Encyclopedia-Management/Discord3rdparties).

Also, if you're trying to make your own, check [here](https://github.com/saintwithataint/Client-Modding-Guide).

## Tokens & UserIDs
A Discord token is the authorization for your account; a userid is your account's unique identifier (userids follow a modified [snowflake](https://en.wikipedia.org/wiki/Snowflake_ID) format).
### More About Tokens
Example token: `ODU4OTMyMDU4NjAwMjQzMjMw.YY4OOw.1hs4tL-J0dBMS_yKSTN6iuhqcPo` \*NOTE: don't even try this token. I changed the password + enabled 2fa after writing these docs.
<br />
- The first section (before the first period) is the account's userid, encoded in base64. <br /> In the example token, It's `ODU4OTMyMDU4NjAwMjQzMjMw`, which decodes to `858932058600243230`. Running a lookup on [discord.id](https://discord.id) will show that this is, indeed, the token's owner.
- The second section (after the first period, before the second period) is the token's mint (creation) date, in unix time. The unix is first converted to hex, and then base64. So, to decode it, you can convert this part of the token [from base64 to hex](https://base64.guru/converter/decode/hex). Next, you can take the hex number and [convert it to the decimal format](https://www.rapidtables.com/convert/number/hex-to-decimal.html) (you'll end up with `1636699707` if you do this with the example token). If you run this through a [unix to date converter](https://dqydj.com/unix-time-to-date-converter/), you'll get the token's mint date.
- The third (and final) section is a cryptographic verification system (HMAC/Hash based Message Authentication Code) that occurs on Discord's end. Not much can be done with this alone.
<br /> <br />
###### Some believe that knowing this token format would allow you to bruteforce someone's token, though it'd take more than thirty years. Anything claiming to do this is probably lying or runs off 69,000,000 supercomputers. Apologies for earlier misinformation.
#### Here's a chart (CREDIT: [ImLorio](https://github.com/ImLorio)):
![a chart denoting the discord token format](https://camo.githubusercontent.com/cf24aafb655bae3550c02c1f0f67122ddbcc3aa09ee782e9cbcfc919bc8bdba2/68747470733a2f2f692e696d6775722e636f6d2f36384b424950452e706e67)
### More about UserIDs
- First, you convert the userid to binary.
- First 42 bits of the binary can be converted to the decimal format, and the remaining integer is the amount of time since the Discord Epoch, `1420070400000`.
- The next 5 bits are an internal worker id
- The next 5 bits are an internal process id
- The last 12 bits are a count of every discord id, ever.
#### Here's a chart (CREDIT: [ImLorio](https://github.com/ImLorio))
![a chart with the discord userid, broken down into its simplest form](https://camo.githubusercontent.com/84c08bc973496c1ba7d4e0520466d60d446082f6eeba92af2f443dbe60428cf0/68747470733a2f2f692e696d6775722e636f6d2f77416b7a43746b2e706e67)
## Discord and Log-ins: What to Know & How to Abuse It (CREDIT: [Monst3red](https://github.com/Monst3red))
The Discord login (in the browser's context, frontend) works as an iframe with the token inside, and it reloads to log you in. This can be abused (and it was, by [m-Phoenix852](https://gist.github.com/m-Phoenix852/b47fffb0fd579bc210420cedbda30b61)) for a token login script.
Because of this, you can log into the Discord webapp with a user token using selenium's webdrivers.
```py
# SCRIPT TAKEN FROM "https://github.com/Monst3red/Discord-Token-Login-Tool"

import selenium
from selenium import webdriver

token = input("Token here: ")

script = '''
    const login = (token) => {
        setInterval(() => document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`, 50);
        setTimeout(() => location.reload(), 2500);
    };''' + f'login("{token}")' # adapted from "https://gist.github.com/m-Phoenix852/b47fffb0fd579bc210420cedbda30b61"

driver = webdriver.Chrome("chromedriver.exe")
driver.get("https://discord.com/login")
driver.execute_script(script)
```
The Discord login (in the API's context, backend) works as a WebSocket connection to the url `wss://gateway.discord.gg/?encoding=json&v=9&compress=zlib-stream`. I don't know much about this part, however, [Hornwitser](https://www.hornwitser.no/) has a good documentation of Discord's WebSockets on [his site](https://www.hornwitser.no/discord/analysis).
## The API
Currently, we're on API v10 (though the client still communicates on v9).

### Endpoints
One of the most notable URLs (in my opinion) is https://discord.com/api/v10/science; it's Discord's data collection URL. More info about it [here](https://luna.gitlab.io/discord-unofficial-docs/science.html).

I'm not gonna include all the other ones in this document, but if all you need is a list of the endpoints, they can be found [here](https://github.com/13-05/hidden-disc-docs/blob/main/internals/endpoints.md#the-actual-endpoints).

### Hidden channels
Hidden channels are hidden on the frontend, yes, but there's nothing in the API blocking you from accessing these channels; they simply don't display. This was discovered long ago, and led to the development of [this](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ShowHiddenChannels) BD (BetterDiscord) extension's creation. This can be abused with, say, a selfbot or a [UserScript](https://greasyfork.org/en) to display all channels as if you have `Owner` level permissions on that server. NOTE: you can see the channel's name and topic, though no messages sent in there are able to be seen.

#### JS Snippet For Getting All Hidden Channels
```js
let findHiddenChannels = (guildID) => { // guildID should be type "string", btw
    let mod;
    let visibleChannels = [];
    let hiddenChannels = [];
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {
            mod = mod || Object.values(e.c).find(m => m?.exports?.default && m.exports.default["getMutableGuildChannelsForGuild"])
        }
    ]);
    let allChannels = Object.keys(mod.exports.default.getMutableGuildChannelsForGuild(guildID));
    mod = undefined;
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {
            mod = mod || Object.values(e.c).find(m => m?.exports?.default && m.exports.default["getChannels"])
        }
    ]);
    mod.exports.default.getChannels(guildID)["SELECTABLE"].forEach(o => visibleChannels.push(o.channel.id));
    mod = undefined;
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {
            mod = mod || Object.values(e.c).find(m => m?.exports?.default && m.exports.default["hasChannel"])
        }
    ]);
    allChannels.filter(hiddenChannel => visibleChannels.every(visibleChannel => visibleChannel != hiddenChannel)).forEach(channelId => hiddenChannels.push(mod.exports.default.getChannel(channelId))); // takes visible channels away from all channels, leaving us with non-visible ("hidden") channels
    mod = undefined;
    return hiddenChannels.filter(channelObj => channelObj.isCategory() == false); // makes sure no categories are falsely flagged as hidden channels
}
// this function returns an array (AKA '[]')
```
This function finds all channelIds for a certain guild, then finds the visible ones. It then takes the visible ones away from the total list, and we're left with the hidden channels. Finally, it makes a request for all the `Channel` objects, and puts them inside an array, which is what's returned! Usage:
```js
findHiddenChannels("guildid12419012490owo");
```

### Webhooks
Webhooks are an excellent way to send data to and from discord without creating a bot, and they also work well to route [selfbot](https://github.com/13-05/hidden-disc-docs/#self-bots-their-uses-risks-frameworks-and-some-communities) responses. ([dsc.RED](https://github.com/13-05/discord.RED/blob/main/selfbot_red.py), one of my old selfbot projects, responds through webhooks).

#### Hook Actions
A webhook url accepts a few different HTTP request types:

- `POST`: to send a message
- `GET` to get data about the webhook
- `DELETE` to delete the webhook remotely

###### NOTE: no external authorization is required to perform any of these actions (currently). If you have the webhook URL, you can do all of this.

#### Other Webhook Info
- They don't seem to be very highly rate-limited; if at all.
- They're one of the most easily abused pieces of Discord's API.
- They're channel-specific.
- They can't receive messages (as far as I know).
- Their tokens are a completely different format than User/Bot auth tokens.

### Invites: Servers and Friends
As everyone should know, you can easily make invites to servers. What you might not know, though, is that you can actually make friend links; AKA links that, when someone clicks on them, it makes them add you!

#### JS Snippet for Creating Friend Invites
```js
(async () => {
  let mod = undefined;
  window.webpackChunkdiscord_app.push([[Math.random()],{},(e)=>{mod=mod||Object.values(e.c).find(m=>m?.exports?.default&&m.exports.default?.createFriendInvite)}]);

  console.log(`Friend invite: https://discord.gg/${(await mod.exports.default.createFriendInvite()).code}`);
})();
```

This snippet is self-working, unlike the `findHiddenChannels` one. Just paste it in your console, and bam: you have a friend link!

### Discord Experiments, Developer Options, and More!
Self explanatory, the below snippet will make your client think you're a Discord developer.

#### JS Snippet for Enabling Developer Mode
```js
Object.defineProperty(
    (window.webpackChunkdiscord_app.push([
            [""],
            {},
            (e) => {
                m = [];
                for (let c in e.c) {
                    m.push(e.c[c]);
                }
            },
        ]),
        m).find((m) => m?.exports?.default?.isDeveloper !== void 0)
    .exports.default,
    "isDeveloper", {
        get: () => true,
        configurable: true,
    },
    window.webpackChunkdiscord_app.pop();
);
```

#### JS Snippet for Disabling Developer Mode
```js
Object.defineProperty(
    (window.webpackChunkdiscord_app.push([
            [""],
            {},
            (e) => {
                m = [];
                for (let c in e.c) {
                    m.push(e.c[c]);
                }
            },
        ]),
        m).find((m) => m?.exports?.default?.isDeveloper !== void 0)
    .exports.default,
    "isDeveloper", {
        get: () => false,
        configurable: true,
    },
    window.webpackChunkdiscord_app.pop();
);
```

### The HypeSquad Badges
You can earn one of three HypeSquad badges by taking the test (located below the Change Log in Discord's settings).

![Image of the hypesquad test's position](https://raw.githubusercontent.com/13-05/hidden-disc-docs/main/images/squad-pos.png)

Each HypeSquad badge has an ID.
- `Bravery`: 1
- `Brilliance`: 2
- `Balance`: 3

You can abuse this fact to get *any HypeSquad Badge you want*.

Here's some code to do that, using Python's `requests` lib.
```py
# ADAPTED FROM "https://github.com/TT-Tutorials/Rage-Multi-Tool/blob/main/rage.py#L2804"
import requests

token = input('What\'s your token?: ')
house = input('Which HypeSquad Badge do you want?\n[1]: Bravery\n[2]: Brilliance\n[3]: Balance\n\n> ')
try:
  house_id = int(house)
except:
  print("You must input 1, 2, or 3!")

JSON_PAYLOAD = {'house_id': house_id}
JSON_HEADERS = {'Authorization': f'{token}'}

r = requests.post('https://discordapp.com/api/v9/hypesquad/online', headers=JSON_HEADERS, json=JSON_PAYLOAD, timeout=10)
if r.status_code == 204:
  print(f"Badge successfully changed!")
else:
  print("There was an error changing your badge.")
```

### API Endpoint Access
Currently, the Discord API isn't very secure. To get access to nearly every [endpoint](https://github.com/13-05/hidden-disc-docs/#endpoints), you only need to set the `Authorization` header of your request to a User/Bot token. Do note, though, that User tokens and Bot tokens grant different access to different endpoints; you have to experiment to find what token has more access. But, I'd assume User tokens have the least limitations (with the highest chance of getting in trouble). Also note that Discord user tokens are practically immune to ratelimiting aside from spam; bot-tokens aren't that powerful.

### Bot & User Accounts
Bot accounts and User accounts both have their advantages and disadvantages, however, Bot accounts get rate-limited more frequently than User accounts. This fact can be useful when it comes to selfbotting and API exploitation.

### Flags: A User-Account's "Genes"
Flags are a deciding factor in your account's preferences, as well as what badges you have. Similar to genetics with alleles controlling traits, your number of flags codes for badges, as well as other user-data.

See the untold [Flag Documentation](https://flags.lewistehminerz.dev/) (Credit [LewisTehMiners](https://github.com/LewisTehMinerz/discord-flags))

### Token Fluctuation
Your token will almost never stay the same forever. Regardless of if you have 2fa or not, changing your password will always change your token.

#### MFA Accounts
Users with any form of 2fa (like Google Authenticator) have "MFA Accounts." These accounts have a different token each time you log in.

#### Normal Accounts
Users without 2fa in any form can change their password to change their token.

## Messages & Markdown
Alright, so this *also* deserves a section on its own, but not much is here.
### Simple Markdown
- \~\~strikethrough text\~\~
- \*\*bolded text\*\*
- \*italicized text (1)\*
- \_italicized text (2)\_
- \_\_underlined text\_\_
- \`single-lined codeblock\`
- \`\`\`multi-lined codeblock\`\`\` [*see below](#colored-codeblocks)
- \> single-lined quote
- \>\>\> multi-lined quote
### Colored Codeblocks
Discord added a new feature recently; ANSI colors in multi-lined codeblocks! To do them manually, check [here](https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06)!

## Discord's API Frontend: A Custom Webpack Implementation
Discord, like many platforms, has their own, pre-written API wrap. It's only accessable through the application itself, sorry Python devs.

If this section has peaked your interest, you're in luck! I have a "library" (used in loose terms; it's just something you paste in the inspect element console, but still) that automates a lot of this stuff, and has support for its own special stuff. Check that out [here](https://github.com/13-05/discord.js-pure)!

### The Webpack Object
See the `window.webpackChunkdiscord_app` object [here](https://raw.githubusercontent.com/Discord-Datamining/Discord-Datamining/master/current.js). (CREDIT to the [Discord Datamining](https://github.com/Discord-Datamining/Discord-Datamining) team!)


To fetch webpack modules in the easiest way possible, load up Discord, open the inspect element console (can't? see [here](https://github.com/13-05/hidden-disc-docs#help-i-cant-open-the-inspect-element-console)), and paste the following functions:
### Global Function To Find a Requested Module
```js
let getModule = (n, f = true) => { // 'f' is whether to return the first module found if it goes by display name
    const cache = () => {
        let webp = window.webpackChunkdiscord_app.push([
            [Symbol()], {},
            _ => _.c
        ]);
        window.webpackChunkdiscord_app.pop();
        return webp;
    };
    let findAllModules = (filter = (m) => m) => {
        let modules = [];
        for (let item in cache()) {
            if (Object.hasOwnProperty.call(cache(), item)) {
                let element = cache()[item].exports;
                if (!element) {
                    continue
                }
                if (filter(element)) {
                    modules.push(element)
                }
            }
        }
        return modules
    };
    let x = false;
    let mod;
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {
            mod = mod || Object.values(e.c).find(m => m?.exports?.default?.[n]);
        }
    ]);
    window.webpackChunkdiscord_app.pop();
    if (typeof mod === "undefined") {
        window.webpackChunkdiscord_app.push([
            [Math.random()], {}, (e) => {
                mod = mod || Object.values(e.c).find(m => m?.exports?.[n]);
            }
        ]);
        window.webpackChunkdiscord_app.pop();
    }
    if (typeof mod === "undefined") {
        x = true;
        if (f == true) {
            mod = mod || (typeof findAllModules(m => m?.default?.displayName === n) !== "undefined") ? findAllModules(m => m?.default?.displayName === n)?.[0] : findAllModules(m => m?.displayName === n)?.[0];
        } else {
            mod = mod || (typeof findAllModules(m => m?.default?.displayName === n) !== "undefined") ? findAllModules(m => m?.default?.displayName === n) : findAllModules(m => m?.displayName === n);
        }
    }
    if (x) {
      return (typeof mod?.default !== "undefined") ? mod?.default : mod;
    }
    else if (x == false) {
        return (typeof mod?.exports?.default !== "undefined") ? mod?.exports?.default : mod?.exports;
    }
    return undefined;
}
```
Example usage:
```js
getModule("getToken").getToken();
```
```js
getModule("getChannelId").getChannelId();
```
```js
getModule("Markdown");
```

### Listing Every Module
Credit to [DoggyBootsy](https://github.com/doggybootsy/), as he originally made this function, I just altered it a bit.
```js
// function to find all of Discord's webpack modules, based on a filter if applicable
let findAllModules = (filter = () => true) => {
    (e = webpackChunkdiscord_app.push([
            [Math.random()], {}, (e) => {
                webpackChunkdiscord_app.pop();
                return e;
            }
        ]),
        m = []);
    for (let i in e.c) {
        if (Object.hasOwnProperty.call(e.c, i)) {
            let o = e.c[i].exports;
            if (!o) {
                continue;
            };
            if (filter(o)) {
                m.push(o);
            };
        }
    }
    return m;
}
```
This function locates all of Discord's webpack modules (if a filter isn't supplied), and returns them. Example filters:
```js
findAllModules(m => m?.default?.displayName=="MiniPopover");
```
The question marks or whatever are required.

This snippet will **find all** of discord's **modules**, and then return the one(s) with a display name of `"MiniPopover"`. By the way, the `"MiniPopover"` is the three dots menu on every message.

```js
findAllModules(() => true);
```
This snippet finds every module (no filter).

### General Module Searches
```js
let findModules = (n, b) => {
    (d = typeof b === "undefined" ? true : b,
        n = n.toLowerCase(),
        m = new Array());
    webpackChunkdiscord_app.push([
        [Math.random()], {},
        (e) => {
            m.push(...Object.values(e.c).filter(m => m?.exports && ((m?.exports?.default && Object.keys(m.exports.default).some(key => key.toLowerCase().includes(n))) || (m.exports?.default?.prototype && Object.keys(m.exports.default.prototype).some(key => key.toLowerCase().includes(n))) || Object.keys(m.exports).some(key => key.toLowerCase().includes(n)))))
        }
    ]);
    if (d) {
        m.forEach(f => m.push(typeof f?.exports?.default === "undefined" ? f?.exports : f?.exports?.default));
        for (var i = 0; i < m.length; i++) {
            m.forEach((f, i) => typeof f?.id === "undefined" ? m = m : m.splice(i, 1));
        }
        return [...m];
    } else {
        return [...m];
    }
}
```
This function (CREDIT [pythonmcpi](https://github.com/pythonmcpi) for the general function, I modded it to work "better". in quotes because it just filters in a little bit more of a fine way with option 1) does a general function search and returns the encasing modules.

For example, `findModules("gettoken")` will return two modules including that function, and since they're modules, other functions involving the token will show up as well.

This function has two "modes", and defaults to the first if no mode (boolean) is specified.

1) `findModules("TERM_HERE", true)`: finds the direct "module export" and grabs only the functions in that module, not information like module-IDs. This is the most "straight-shot" way a fuzzy module search should go imo.
2) `findModules("TERM_HERE", false)`: returns the raw module, including module-IDs and other info that may be useful, but not generally.

For more JS snippets, check [here](https://github.com/13-05/hidden-disc-docs/tree/main/snippets)!
