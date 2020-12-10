const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'bot.';
const token = process.env.TOKEN;

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Made by Revol');
});
bot.on('message', message => {
    if (message.content === 'bot.check') message.reply('Bot Working');
    if (message.content === 'bot.error') message.channel.send('<@221029766235553792> boss if u could assist me please!').then(r => {
        bot.users.cache.get("221029766235553792").send("Error on Revive Community");
    })
    
    if (message.content === 'bot.avatar') {
      message.channel.send(`**This is your avi:**`)
      let targetMember;
      targetMember = message.author;

      let avatarEmbed = new Discord.MessageEmbed()
          .setImage(targetMember.displayAvatarURL())
          .setColor(targetMember.displayHexColor)
          message.channel.send(avatarEmbed)
    };
});
bot.on('message', message => {
  let command = message.content.split(' ')[0].slice(1);
  // Command handler, seen previously
  switch (command) {
          case 'bot.forward': {
            message.channel.send('Hey everyone\n'
            +'💠The BOT will now forward the recruit to applications.\n'
                          + '⚠️Confirm with a thumb up or deny with a thumb down.');

                  // Reacts so the user only have to click the emojis
                  message.react('👍').then(r => {
                          message.react('👎');
                  });

                  // First argument is a filter function
                  message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/ || user.id === "617656640723877888"/*Jayz*/|| user.id === "411613396295876608"/*miiith*/ || user.id === "515860889644302386" /*Airush*/ || user.id === "314129754037157898" /*Henk*/ || user.id === "552573592810815519" /*Sleepless*/ || user.id === "278202167301505027" /*Andrew*/ || user.id === "488947445754101772" /*cloudy*/ || user.id === "371656934262046730" /*gappled*/ || user.id === "608492929157431336" /*Razor*/ || user.id === "282858822798802944" /*reelaxx*/ || user.id === "438451858135318538" /*stealthy*/ || user.id === "489862915357147137" /*Jwob*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                          { max: 1 }).then(collected => {
                                  if (collected.first().emoji.name == '👍') {
                                          message.channel.send('➡️Redirecting...');
                                          bot.channels.cache.get("768231681047265281").send(`New application approved by an administrator!`);                                         
                                          bot.channels.cache.get("768231681047265281").send(message.embeds);
                                          bot.channels.cache.get("768231681047265281").send(`Vote here`);   
                                  } else
                                          message.channel.send('❌Redirection cancelled.');
                          }).catch(() => {
                                  message.channel.send('❌There has been an error,Contact my boss Revol.');
                          });

                  break;
          }  
  }
});
bot.on('message', message => {
        let userdata = message.content.slice('').trim().split(' ');
        if (message.content.includes('!bot.manualforward')){
                message.channel.send('➡️Redirecting...');
                let channel = bot.channels.cache.get("768140186247757876")
                bot.channels.cache.get("768231681047265281").send(`New application approved by an administrator!`);
                channel.messages.fetch(`${userdata[1]}`).then(message => {
                        bot.channels.cache.get("768231681047265281").send(message.embeds)      
                bot.channels.cache.get("768231681047265281").send(`Vote here`);
                bot.channels.cache.get("768231681047265281").send(`=======================================================================================`);
                });   
        }
    });
bot.on('message', message => {
        if(message.content === `Vote here`) {
                message.react('650356018118656000').then(r => {
                        message.react('650355996920774657');
                });
        }
});


bot.login(token).catch(err => console.log(err))
