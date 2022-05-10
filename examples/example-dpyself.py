# <- imports ->
import discord

# <- selfbot class (client object) ->
class discordSelfbotClient(discord.Client):
    async def on_ready(self):
        print(f"logged in as {self.user}!")

    async def on_message(self, message):
        if message.author != self.user: # we dont want it to respond to anyone besides us ofc
            return

        if message.content == "ping": # if you say ping
            await message.channel.send("pong!") # it says pong

# <- starting the selfbot ->
client = discordSelfbotClient() # initializing the client as variable "client"
client.run('token69.420yourtoken.wtftokenhere??') # running the selfbot
