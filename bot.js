var Discord = require('discord.io');
var logger = require('winston');
var feed = require("feed-read");
var auth = require('./auth.json');

var RSSFEED_BM = "http://dites.bonjourmadame.fr/rss";

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
// Send the retrieve Madame to the channelID
// random=true|false (if false, it will send the latest Madame)
function sendMadame(random, channelID){
    feed(RSSFEED_BM, function(err, articles) {
        var index = 0;
        var textMessage = 'Salut c\'est Momo pour votre fracture de la rétine quotidienne, enjoy 😏 '
        if(random){
            index = Math.floor(Math.random() * (articles.length - 1));
            textMessage = 'Je vois que tu en veux d\'avantage gros cochon 🐷 '
        }
        // var re = /<img[^>]+src="(http*:\/\/[^">]+)"/;
        var re = /<img[^>]+src="(https:\/\/[^">]+)"/;
        var results = re.exec(articles[index].content);
        var madame = textMessage + results[1];

        bot.sendMessage({
            to: '693949025690583120',
            message: madame
        });
    });
}

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: '693949025690583120',
                    message: 'test'
                });
            break;
            // !foo
            case 'foo':
                bot.sendMessage({
                    to: channelID,
                    message: 'bar'
                });
            break;
            case "helpMadame":
            bot.sendMessage({
                to: channelID,
                message: "**helpMadame**: commands list\n**lastMadame**: show the last Madame\n**randomMadame**: show a random Madame"
            });
            break;
            case "lastMadame":
                sendMadame(false, channelID);
                break;
            case "randomMadame":
                sendMadame(true, channelID);
                break;
            // Just add any case commands if you want to..

         }
     }
});