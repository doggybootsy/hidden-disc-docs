# --- IMPORTS ---
import discum


# --- GLOBAL VARIABLES ---
your_token = input('token: ')
bot = discum.Client(token=your_token,log=False)


# --- MAIN CODE ---
@bot.gateway.command # indicates a function as an event, in this case a gateway event
def on_ready(resp):
  if resp.event.ready_supplemental: #ready_supplemental is sent onready
    user = bot.gateway.session.user # parsing the current user
    username = user['username']
    discrim = user['discriminator']
    yourself = f"{username}#{discrim}"
    print(f"logged in as {yourself}")
@bot.gateway.command
def on_message(resp):
  if resp.event.message:
    msg = resp.parsed.auto() # parsing the message content
    guild = msg['guild_id']
    channel = msg['channel_id']
    username = msg['author']['username']
    discrim = msg['author']['discriminator']
    content = msg['content']
    print(f"guild: {guild} / channel: {channel} || {username}#{discrim}: {content}")

bot.gateway.run() # running the bot
