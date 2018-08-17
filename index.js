const Discord = require(`discord.js`);
const fs = require(`fs`);
const client = new Discord.Client({
    disableEveryone: false,
    autoReconnect: true
});
client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.error(err);
    }
  });
client.on('ready', () => {
    client.user.setActivity(`${client.users.size} users`, { type: "WATCHING"});
    //Status
    client.user.setStatus("online");
});
    //Events
    client.on('message', message => require('./events/message.js')(client, message));
    client.on('message', message => require('./events/ticket/message.js')(client, message));

 
client.login(process.env.TOKEN);