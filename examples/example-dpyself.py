# --- IMPORTS ---
import discord
import asyncio


# --- GLOBAL VARIABLES ---
client = discord.Client() # represents a client object
token = input('token: ')


# --- MAIN CODE ---
@client.event
async def on_ready():
  print(f"logged in as {client.user}")

@client.event
async def on_message(message):
  print(f"guild: {message.guild} / channel {message.channel} || {message.author}: {message.content}")

client.run(token) # starting the bot
