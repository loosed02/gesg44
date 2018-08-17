const Discord  = require("discord.js");
module.exports = async(client, message) => {
    if(message.content.toLowerCase().startsWith(`-new`)) {
        const reason = message.content.split(" ").slice(1).join(" ");
        //Need staff role in the server them to see it.
        
        if (!message.guild.roles.exists(c => c.name, "Staff"));
        let embed = new Discord.RichEmbed()
        .setAuthor("TheOriginMC-Ticket", "https://cdn.discordapp.com/icons/479464813290848271/591c100491cdd61bb887dbfa961e8131.png")
        .setDescription("You already have a ticket open, sorry.")
        .setTimestamp()
        .setColor("#4286f4");
        if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(embed);
        client.guilds.get(`416677773852278785`).createChannel(`ticket-${message.author.id}`, "text").then(c => {
            c.setParent(`480142161816584193`)
            let role = message.guild.roles.find(c => c.name, "Staff");
            let role2 = message.guild.roles.find(c => c.name, "@everyone");
            //Permissions
            c.overwritePermissions(role, {
                'SEND_MESSAGES': true,
                'READ_MESSAGES': true
            });
            c.overwritePermissions(role2, {
               'SEND_MESSAGES': false,
                'READ_MESSAGES': false
            });
            c.overwritePermissions(message.author, {
                'SEND_MESSAGES': true,
                'READ_MESSAGES': true
            });
        let embed2 = new Discord.RichEmbed()
        .setAuthor("TheOriginMC-Ticket", "https://cdn.discordapp.com/icons/479464813290848271/591c100491cdd61bb887dbfa961e8131.png")
        .setDescription(`Alright, your ticket has been created, #${c.name}.`)
        .setTimestamp()
        .setColor("#4286f4");
   
            message.channel.send(embed2);
            let embed = new Discord.RichEmbed()
            .setAuthor("TheOriginMC-Ticket", "https://cdn.discordapp.com/icons/479464813290848271/591c100491cdd61bb887dbfa961e8131.png")
            .addField(`Hello, @${message.author.username}.`, "Please stand what's your issue. \n•You shall give valid information toward your issues (Server related) are.\nReporting an user? \n•You should have proof of the player!\nReporting an user in the server? \n•Please provide proof and the user IGN.\nReporting an user in the Discord? \nPlease Follow the instructions. \n•``Settings - Appeareance - Developer mode`` then go back to the server and right click an user to get his/her ID and report. ")
            .setColor("#4286f4")
            .setTimestamp()
            c.send({ embed: embed  });   
        }).catch(console.error);
    }
    if (message.content.toLowerCase().startsWith(`-close`)) {
        let embed6 = new Discord.RichEmbed()
        .setAuthor("TheOriginMC-Ticket", "https://cdn.discordapp.com/icons/479464813290848271/591c100491cdd61bb887dbfa961e8131.png")
        .setDescription(`You can't close this ticket.`)
        .setColor("#4286f4")
        .setTimestamp()

        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(embed6) ;
        let embed1 = new Discord.RichEmbed()
            .setAuthor("TheOriginMC-Ticket", "https://cdn.discordapp.com/icons/479464813290848271/591c100491cdd61bb887dbfa961e8131.png")
            .setDescription(`Please proceed to confirm the by doing -confirm`)
            .setColor("#4286f4")
            .setTimestamp()
        message.channel.send(embed1)
        .then((m) => {
          message.channel.awaitMessages(response => response.content === '-confirm', {
            max: 1,
            time: 10000,
            errors: ['time'],
          })
          .then((collected) => {
              message.channel.delete();
            })
            .catch(() => {
                let embed1 = new Discord.RichEmbed()
                .setAuthor("TheOriginMC-Ticket", "https://cdn.discordapp.com/icons/479464813290848271/591c100491cdd61bb887dbfa961e8131.png")
                .setDescription(`Sorry, the ticket couldn't be closed.`)
                .setColor("#4286f4")
                .setTimestamp()

              m.edit(embed1).then(m2 => {
                  m2.delete();
              }, 3000);
            });
        });
            
    }
 }
