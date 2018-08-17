const Discord = require('discord.js');
//Console chalk
const chalk = require(`chalk`);
const log = console.log;
const prefix = require(`../settings/config.json`)
//Client
const client = new Discord.Client();
//MrZeke Creator
module.exports = (client, message) => {
    module.exports = (client, message) => {
        if (message.author.bot || !message.guild) return;
        if (message.content.indexOf(prefix.prefix) !== 0) return;
        const args = message.content.slice(prefix.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);
        if (!cmd) return;
        cmd.run(client, message, args);
      };
    };