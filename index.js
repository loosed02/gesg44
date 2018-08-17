const Discord = require(`discord.js`);
const fs = require(`fs`);
const config = require('./settings/config.json')
const client = new Discord.Client({
    disableEveryone: false,
    autoReconnect: true
});
client.on("message", message =>{
       if(message.author.bot) return;
       if(message.content.indexOf(config.prefix) !== 0) return;
       const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
       const command = args.shift().toLowerCase();
       try {
       let commandFile = require(`./commands/${command}.js`);
       commandFile.run(client, message, args);
    } catch (err) {
           }
         });
       
client.on('ready', () => {
    //Status
    client.user.setActivity({game: {name: "TheOriginMC.com", type: 0}});
    client.user.setStatus("online");
});
    //Events
    client.on('message', message => require('./events/message.js')(client, message));

 
client.login(process.env.TOKEN);