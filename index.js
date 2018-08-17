const Discord = require(`discord.js`);
const fs = require(`fs`);
const auth = require(`./settings/config.json`)
const client = new Discord.Client({
    disableEveryone: false,
    autoReconnect: true
  });

  client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(auth.prefix) !== 0) return;
      const args = message.content.slice(auth.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.error(err);
    }
  });
  //Prefix handler
  client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = auth.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

});
    //Events
    client.on('message', message => require('./events/ticket/message.js')(client, message));

client.login(process.env.TOKEN);