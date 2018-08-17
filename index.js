const Discord = require(`discord.js`);
const Enmap = require("enmap");
const fs = require(`fs`);
const client = new Discord.Client({
    disableEveryone: false,
    autoReconnect: true
});
    //Command Handler
     client.commands = new Enmap();
     fs.readdir("./commands/", (err, files) => {
     if (err) return console.error(err);
     files.forEach(file => {
     if (!file.endsWith(".js")) return;
     let props = require(`./commands/${file}`);
     let commandName = file.split(".")[0];
     console.log(`Attempting to load command ${commandName}`);
     client.commands.set(commandName, props );
    });
});
    //Events
    client.on('ready', () => require(`./events/ready.js`)(client));    
    client.on('message', message => require('./events/message.js')(client, message));
    client.on('message', message => require('./events/ticket/message.js')(client, message));

 
client.login(process.env.TOKEN);