# Discord Bot `Bonjour Madame`

-> This Bot is used to publish rss fead from [Bonjour Madame](http://www.bonjourmadame.fr/) in Discord Channel.

## Bot commands

* `!helpMadame`: commands list
* `!lastMadame`: show the last Madame
* `!randomMadame`: show a random Madame

## Installation

1. Clone the repository
2. `npm install`
3. Create a discord bot here <https://discordapp.com/developers/applications/me>
4. Activate the APP BOT USER and retrieve the bot Token
5. Invite your bot to your Discord server <https://discordapp.com/oauth2/authorize?client_id=YOURBOTCLIENTID&scope=bot>
6. Create a `auth.json` from `auth.example.json` and add your bot token here
7. Start the bot: `node bot.js`

In order to invite the bot to your Discord server, build you OAuth url with the clientId of your bot:

    https://discordapp.com/oauth2/authorize?client_id=YOURBOTCLIENTID&scope=bot


