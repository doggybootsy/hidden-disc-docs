# About
This is a repository with everything you need to know about abusing the Discord API and how it works!

By the way, a bit off-topic, but [*here*](https://gist.github.com/13-05/3237641acf0356a6c532627c0729856d)'s a list I've put together that documents Discord's tracking and services to switch to, as well as how they work.

Keep in mind, most code examples are in Python.

## TOC
- [Other Docs](https://github.com/13-05/hidden-disc-docs/#other-docs)
- [Tools](https://github.com/13-05/hidden-disc-docs/#tools)
- [Self-Bots](https://github.com/13-05/hidden-disc-docs/#self-bots-their-uses-risks-frameworks-and-some-communities)
- [Tokens](https://github.com/13-05/hidden-disc-docs/#more-about-tokens)
- [UserIDs](https://github.com/13-05/hidden-disc-docs/#more-about-userids)
- [Log-Ins](https://github.com/13-05/hidden-disc-docs#discord-and-log-ins-what-to-know--how-to-abuse-it-credit-monst3red-and-hxr404)
- [The API](https://github.com/13-05/hidden-disc-docs/#the-api)
- [Markdown](https://github.com/13-05/hidden-disc-docs/#messages--markdown)
- [Discord's Webpack Implementation](https://github.com/13-05/hidden-disc-docs#discords-api-frontend-a-custom-webpack-implementation)

## Other Docs
Some more documentation about the Discord API can be found below (ranked by usefulness):
- [Luna's Docs](https://luna.gitlab.io/discord-unofficial-docs/)
- [Discum's "Using" Docs](https://github.com/Merubokkusu/Discord-S.C.U.M/tree/master/docs/using)
- [Birdie's Webhook Docs](https://birdie0.github.io/discord-webhooks-guide/)
- [The Official Docs](https://discord.com/developers/docs/intro)

## Tools
API exploits can be found very simply. _I_ find Discord exploits with [Burp Suite](https://portswigger.net/burp), [FireFox's Dev Tools](https://developer.mozilla.org/en-US/docs/Tools), and the [Python Requests Library](https://pypi.org/project/requests/). Also, pay special attention to any Discord API documentation; they'll also be a great tool on your journey.

## Self-bots: their uses, risks, frameworks, and some communities.
### Uses
A selfbot can be useful for quick Discord utilities; it's a bot running on a user account.
### Risks
A selfbot is always risky due to its being against Discord's [terms](https://discord.com/terms), although Discord won't notice unless you use it to carry out certain [risky actions](https://gist.github.com/13-05/c7691d633fd011e96aceebe889a5a4a9).
### Frameworks
- [DisCum.py](https://github.com/Merubokkusu/Discord-S.C.U.M) (powerful wrapper with lowest chance of getting caught, though hard to master) (example [here](https://github.com/13-05/hidden-disc-docs/blob/main/examples/example-discum.py))
- [discord.py-self](https://github.com/dolfies/discord.py-self) (same syntax as discord.py, adapted to access user gateways) (example [here](https://github.com/13-05/hidden-disc-docs/blob/main/examples/example-dpyself.py))
- [Anarchy.NET](https://github.com/not-ilinked/Anarchy) (powerful wrapper w/low chance of getting caught, weird syntax though) (example [here](https://github.com/not-ilinked/Anarchy/blob/master/Example%20projects/GuildDuplicator/Program.cs))
- [discord.js-selfbot](https://www.npmjs.com/package/discord.js-selfbot) (probably a high chance to get caught, i haven't used this before but it seems to be only a small modification to vanilla discord.js) (no example really, same syntax as discord.js tho and example [here](https://www.npmjs.com/package/discord.js-selfbot#example-usage))
- [discord.js-pure](https://github.com/13-05/discord.js-pure) (discord selfbot wrapper written in plain browser javascript; it runs in the inspect element console. i'm the dev of this lib and it kinda works, i havent gotten caught so far...) (example [here](https://github.com/13-05/discord.js-pure#example-code))
### Communities
- [Discord.Py-Self Telegram](https://t.me/dpy_self_discussions)
- [Discord.JS-Pure Telegram](https://t.me/discord_js_pure)
- [Ghost Discord](https://discord.gg/p7r9qJffHT)
- [Reaper Community Discord](https://discord.gg/Dv5HWRZsqH)
- [Lightning-Bot Discord](https://discord.gg/ZdKUFyx9h2)
- [Zenith Discord](https://discord.gg/CPHuvUaDeN)
- [r/Discord_Selfbots Subreddit](https://www.reddit.com/r/Discord_selfbots/)
## Tokens & UserIDs
A Discord token is the authorization for your account; a userid is your account's unique identifier (userids follow a modified [snowflake](https://en.wikipedia.org/wiki/Snowflake_ID) format).
## More About Tokens
Example token: `ODU4OTMyMDU4NjAwMjQzMjMw.YY4OOw.1hs4tL-J0dBMS_yKSTN6iuhqcPo`
<br />
- The first section (before the first period) is the account's userid, encoded in base64. <br /> In the example token, It's `ODU4OTMyMDU4NjAwMjQzMjMw`, which decodes to `858932058600243230`. Running a lookup on [discord.id](https://discord.id) will show that this is, indeed, the token's owner.
- The second section (after the first period, before the second period) is the token's mint (creation) date, in unix time. The unix is first converted to hex, and then base64. So, to decode it, you can convert this part of the token [from base64 to hex](https://base64.guru/converter/decode/hex). Next, you can take the hex number and [convert it to the decimal format](https://www.rapidtables.com/convert/number/hex-to-decimal.html) (you'll end up with `1636699707` if you do this with the example token). If you run this through a [unix to date converter](https://dqydj.com/unix-time-to-date-converter/), you'll get the token's mint date.
- The third (and final) section is a cryptographic verification system (HMAC/Hash based Message Authentication Code) that occurs on Discord's end. Not much can be done with this alone.
<br /> <br />
###### This token format can be abused and used to create a [token bruteforcer](https://github.com/13-05/hidden-disc-docs/blob/main/abuse/token_cracker.py).
### Here's a chart (CREDIT: [ImLorio](https://github.com/ImLorio)):
![a chart denoting the discord token format](https://camo.githubusercontent.com/cf24aafb655bae3550c02c1f0f67122ddbcc3aa09ee782e9cbcfc919bc8bdba2/68747470733a2f2f692e696d6775722e636f6d2f36384b424950452e706e67)
## More about UserIDs
- First, you convert the userid to binary.
- First 42 bits of the binary can be converted to the decimal format, and the remaining integer is the amount of time since the Discord Epoch, `1420070400000`.
- The next 5 bits are an internal worker id
- The next 5 bits are an internal process id
- The last 12 bits are a count of every discord id, ever.
### Here's a chart (CREDIT: [ImLorio](https://github.com/ImLorio))
![a chart with the discord userid, broken down into its simplest form](https://camo.githubusercontent.com/84c08bc973496c1ba7d4e0520466d60d446082f6eeba92af2f443dbe60428cf0/68747470733a2f2f692e696d6775722e636f6d2f77416b7a43746b2e706e67)
## Discord and Log-ins: What to Know & How to Abuse It (CREDIT: [Monst3red](https://github.com/Monst3red) AND [hxr404](https://github.com/hxr404/))
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
Currently, we're on API v10.

### Endpoints
One of the most notable URLs (in my opinion) is https://discord.com/api/v10/science; it's Discord's data collection URL. More info about it [here](https://luna.gitlab.io/discord-unofficial-docs/science.html).

I'm not gonna include all the other ones in this document, but right [here](https://github.com/GregTCLTK/Discord-Api-Endpoints/blob/master/Endpoints.md) and [here](https://gist.github.com/ghostrider-05/8f1a0bfc27c7c4509b4ea4e8ce718af0) each have tons of them listed.

### Hidden channels
Hidden channels are hidden on the frontend, yes, but there's nothing in the API blocking you from accessing these channels; they simply don't display. This was discovered long ago, and led to the development of [this](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ShowHiddenChannels) BD (BetterDiscord) extension's creation. This can be abused with, say, a selfbot or a [UserScript](https://greasyfork.org/en) to display all channels as if you have `Owner` level permissions on that server. NOTE: you can see the channel's name and topic, though no messages sent in there are able to be seen.

### Webhooks
Webhooks are an excellent way to send data to and from discord without creating a bot, and they also work well to route [selfbot](https://github.com/13-05/hidden-disc-docs/#self-bots-their-uses-risks-frameworks-and-some-communities) responses. ([dsc.RED](https://github.com/13-05/discord.RED/blob/main/selfbot_red.py) responds through webhooks).

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
Currently, the Discord API isn't very secure. To get access to nearly every [endpoint](https://github.com/13-05/hidden-disc-docs/#endpoints), you only need to set the `Authorization` header of your request to a User/Bot token ([I wrote a little server that does this automatically!](https://view-all-endpoints-discord.13-05.repl.co/)). Do note, though, that User tokens and Bot tokens grant different access to different endpoints; you have to experiment to find what token has more access. But, I'd assume User tokens have the least limitations (with the highest chance of getting in trouble). Also note that Discord user tokens are practically immune to ratelimiting aside from spam; bot-tokens aren't that powerful.

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
- \`\`\`multi-lined codeblock\`\`\`[*see below](#colored-codeblocks)
- \> single-lined quote
- \>\>\> multi-lined quote
### Colored Codeblocks
Discord added a new feature recently; ANSI colors in multi-lined codeblocks! To do them manually, check [here](https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06)!

## Discord's API Frontend: A Custom Webpack Implementation
Discord, like many platforms, has their own, pre-written API wrap. It's only accessable through the application itself, sorry Python devs.
### The Webpack Object
See the `window.webpackChunkdiscord_app` object [here](https://raw.githubusercontent.com/Discord-Datamining/Discord-Datamining/master/current.js). (CREDIT to the [Discord Datamining](https://github.com/Discord-Datamining/Discord-Datamining) team!)


To fetch webpack modules in the easiest way possible, load up Discord (preferably the webapp so you don't have to go through dev-tools enabling), open the inspect element console, and paste the following functions:
### Finding Them by Display Name
```js
// "function" to find a module by its display name
var findModuleByName = (item) => window.webpackChunkdiscord_app.push([
    [Math.random()], {}, (req) => {
        for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
            if (m && m[item] !== undefined) return m;
        }
    }
]);
```
### Finding them By Their Properties
```js
// "function" to find a module by its properties
var findModuleByProps = (item) => window.webpackChunkdiscord_app.push([
    [Math.random()], {}, (req) => {
        for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
            if (m.default && m.default[item] !== undefined) {
                return m.default;
            }
        }
    }
]);
```
Both of these functions locate a Discord module, whether it's directly by the module name, or by the module's "children" (properties).

Discord uses functions similar to these internally, as well as some other stuff.

Example usage:
```js
findModuleByName("getToken").getToken();
```
- This function locates the module `getToken` and then runs the child function `getToken`, returning the current user's token.

```js
findModuleByProps("startTyping").startTyping(findModuleByProps("getChannelId").getChannelId());
```
- This function locates the module that's the parent of `startTyping` and then runs the child function `startTyping` in the channelID returned by another module located by the property `getChannelId`, which runs the child function `getChannelId`.
### Listing Every Module
Credit to [DoggyBootsy](https://github.com/doggybootsy/), as he originally made this function: *I* only made miniscule changes.
```js
// function to find all of Discord's webpack modules, based on a filter if applicable
findAllModules = function(filter = () => true) {
    if (!window.webpackExports) {
        window.webpackExports = !webpackChunkdiscord_app.webpackExports ? webpackChunkdiscord_app.push([
            [Math.random()], {}, (exports) => {
                webpackChunkdiscord_app.pop()
                webpackChunkdiscord_app.webpackExports = exports
                return exports
            }
        ]) : webpackChunkdiscord_app.webpackExports;
    }
    let modules = []
    for (let item in webpackExports.c) {
        if (Object.hasOwnProperty.call(webpackExports.c, item)) {
            let element = webpackExports.c[item].exports
            if (!element) continue
            if (filter(element)) modules.push(element)
        }
    }
    return modules
}
```
This function locates all of Discord's webpack modules (if a filter isn't supplied), and returns them. Example filters:
```js
findAllModules(m => m?.default?.displayName=="MiniPopover");
```
The question marks or whatever are required.

This snippet will **find all** of discord's **modules**, and then return the one(s) with a display name of `"MiniPopover"`. By the way, the `"MiniPopover"` is the three dots menu on every message.
