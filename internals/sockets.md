# Discord and Sockets
Alright, this part might take a little bit to explain.

Let's just skip over the "email & pw -> token" part, and just go straight from the token to a running socket connection.

1) You instate a websocket connection to `wss://gateway.discord.gg/?encoding=json&v=9`.
2) You send an "IDENTIFY" payload, as seen below.
```js
{
    op: 2,
    d: {
        token: "_USER_TKN",
        properties: {
            $os: "_USER_OS",
            $browser: "_USER_BRWSR",
            $device: "_USER_DVC"
        },
    }
}
```
3) You send the initial "HEARTBEAT" payload, seen below.
```js
{
    op: 1,
    d: null
}
```
4) Discord responds with OP-11, AKA the initial "HEARTBEAT_ACKNOWLEDGEMENT" to your last payload. Seen below.
```js
{
    "t": null,
    "s": null,
    "op": 11,
    "d": null
}
```
6) Discord responds with OP-10, AKA "HELLO", meaning that you can start heartbeating. Seen below.
```js
{
    "t": null,
    "s": null,
    "op": 10,
    "d": 69420 // random num, d, discord sends to you
}
```
7) You begin sending heartbeats, with `d` being the number sent to you with "HELLO". You send them every `d` milliseconds. Seen below.
```js
{
    op: 1,
    d: d
}
```
8) Discord begins sending you `t` events, such as `"MESSAGE_CREATE"`, `"PRESENCE_UPDATE"`, etc. Example payload sent by Discord seen below.
```js
{
  "t": "MESSAGE_CREATE",
  "s": 13,
  "op": 0,
  "d": {
    "type": 19,
    "tts": false,
    "timestamp": "2022-05-03T01:10:32.012000+00:00",
    "referenced_message": {},
    "pinned": false,
    "nonce": "346534563456436",
    "message_reference": {},
    "mentions": [],
    "mention_roles": [],
    "mention_everyone": false,
    "member": {
      "roles": [,
      "mute": false,
      "joined_at": "2021-08-01T15:51:10.015000+00:00",
      "hoisted_role": "",
      "flags": 0,
      "deaf": false
    },
    "id": "69420123",
    "flags": 0,
    "embeds": [],
    "edited_timestamp": null,
    "content": "This is a sample `MESSAGE_CREATE` payload message!",
    "components": [],
    "channel_id": "69420randomchannel281248",
    "author": {
      "username": "random",
      "public_flags": 0,
      "id": "6942012354321",
      "discriminator": "1305",
      "avatar_decoration": null,
      "avatar": null
    },
    "attachments": [],
    "guild_id": "420069010"
  }
}
```

And that's basically the end! Discord keeps sending `t` events so your client can stay "up to date" with what's happening, and you keep sending heartbeats!
