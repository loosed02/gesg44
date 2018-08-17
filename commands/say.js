const Discord = require("discord.js");
exports.run = async (client, msg, args) => {
    //Users ID that can access this command
    if(msg.author.id !== '392419670915022848') {
              let error = new Discord.RichEmbed()
              .setAuthor("Error", "https://cdn.discordapp.com/avatars/478713992903393280/f7b245fec5b4ea4f57d1b55afb64594b.png")
              .addField("Not enough permission!", "You currently don't have enough permission! If you think this an error please contact the guild owner.\nCurrently missing ``DEVELOPER_OWNER`` permission.")
              .setColor("#71ff5d");
              //Error
              msg.channel.send(error)
          }
          else {
              //Bot response
              msg.channel.send(args.join(' '));
              msg.delete();
          }
        };

        //
        exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: ['addrl'],
          permLevel: 0
        };
        
        exports.help = {
          name: 'say',
          description: 'Say something',
          usage: 'say [something]'
          ///
    
        };

    //embed error NO PERMISSIOn
       