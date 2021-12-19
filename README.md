# About
This is a repository with everything you need to know about abusing the Discord API.

## Self-bots: their uses, risks, frameworks, and communities.
### Uses
A selfbot can be useful for quick Discord utilities; it's a bot running on a user account.
### Risks
A selfbot is always risky due to its being against Discord's [terms](https://discord.com/terms), although Discord won't notice unless you use it to carry out certain [risky actions](https://github.com/Merubokkusu/Discord-S.C.U.M/issues/66).
### Frameworks
- [DisCum](https://github.com/Merubokkusu/Discord-S.C.U.M) (powerful wrapper with lowest chance of getting caught, though hard to master)
- [discord.py-self](https://github.com/dolfies/discord.py-self) (same syntax as discord.py, accesses same gateways so it's at a high chance of getting caught)

## Tokens & UserIDs
A Discord token is the authorization for your account; a userid is your account's unique identifier (userids follow the [snowflake](https://en.wikipedia.org/wiki/Snowflake_ID) format).
## More About Tokens
Example token: `ODU4OTMyMDU4NjAwMjQzMjMw.YY4OOw.1hs4tL-J0dBMS_yKSTN6iuhqcPo`
<br />
- The first section (before the first period) is the account's userid, encoded in base64. <br /> In the example token, It's `ODU4OTMyMDU4NjAwMjQzMjMw`, which decodes to `858932058600243230`. Running a lookup on [discord.id](https://discord.id) will show that this is, indeed, the token's owner.
- The second section (after the first period, before the second period) is the token's mint (creation) date, in unix time. The unix is first converted to hex, and then base64. So, to decode it, you can convert this part of the token [from base64 to hex](https://base64.guru/converter/decode/hex). Next, you can take the hex number and [convert it to the decimal format](https://www.rapidtables.com/convert/number/hex-to-decimal.html) (you'll end up with `1636699707` if you do this with the example token). If you run this through a [unix to date converter](https://dqydj.com/unix-time-to-date-converter/), you'll get the token's mint date.
- The third (and final) section is a cryptographic verification system (HMAC/Hash based Message Authentication Code) that occurs on Discord's end. Not much can be done with this alone.
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
