# About
This is a repository with everything you need to know about abusing the Discord API (with the help of our buddy Python).

## TOC
- [Self-Bots](https://github.com/13-05/disc-python-hacks/#self-bots-their-uses-risks-frameworks-and-communities)
- [Tokens](https://github.com/13-05/disc-python-hacks/#more-about-tokens)
- [UserIDs](https://github.com/13-05/disc-python-hacks/#more-about-userids)
- [Log-Ins](https://github.com/13-05/disc-python-hacks#discord-and-log-ins-what-to-know--how-to-abuse-it-credit-monst3red-and-hxr404)
- [API Endpoints](https://github.com/13-05/disc-python-hacks#api-endpoints)

## Self-bots: their uses, risks, frameworks, and some communities.
### Uses
A selfbot can be useful for quick Discord utilities; it's a bot running on a user account.
### Risks
A selfbot is always risky due to its being against Discord's [terms](https://discord.com/terms), although Discord won't notice unless you use it to carry out certain [risky actions](https://github.com/Merubokkusu/Discord-S.C.U.M/issues/66).
### Frameworks
- [DisCum.py](https://github.com/Merubokkusu/Discord-S.C.U.M) (powerful wrapper with lowest chance of getting caught, though hard to master) (example [here](https://github.com/13-05/disc-python-hacks/blob/main/examples/example-discum.py))
- [discord.py-self](https://github.com/dolfies/discord.py-self) (same syntax as discord.py, accesses same gateways so it's at a high chance of getting caught) (example [here](https://github.com/13-05/disc-python-hacks/blob/main/examples/example-dpyself.py))
- [Anarchy.NET](https://github.com/not-ilinked/Anarchy) (powerful wrapper w/low chance of getting caught, weird syntax though) (example [here](https://github.com/not-ilinked/Anarchy/blob/master/Example%20projects/GuildDuplicator/Program.cs))
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
    };''' + f'login("{token}")' # adapated from "https://gist.github.com/m-Phoenix852/b47fffb0fd579bc210420cedbda30b61"

driver = webdriver.Chrome("chromedriver.exe")
driver.get("https://discord.com/login")
driver.execute_script(script)
```
The Discord login (in the API's context, backend) works as a WebSocket connection to the url `wss://gateway.discord.gg/?encoding=json&v=9&compress=zlib-stream`. I don't know much about this part, however, [Hornwitser](https://www.hornwitser.no/) has a good documentation of Discord's WebSockets on [his site](https://www.hornwitser.no/discord/analysis).
## API Endpoints
I'm not gonna include all of them here, but right [here](https://github.com/GregTCLTK/Discord-Api-Endpoints/blob/master/Endpoints.md) and [here](https://gist.github.com/ghostrider-05/8f1a0bfc27c7c4509b4ea4e8ce718af0) each have tons of them listed.=
###### One of the most notable URLs (in my opinion) is `https://discord.com/api/v[current_version]/science`; it's Discord's data collection URL.
