const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("TheOriginMC", "https://cdn.discordapp.com/icons/479464813290848271/591c100491cdd61bb887dbfa961e8131.png")
    .addField("INFO", "IP: `theoriginmc.com` and `play.theoriginmc.com`\nWEBSITE: https://www.theoriginmc.com/\nSTORE: https://buy.theoriginmc.com/")
    .setColor("#4286f4");
    message.channel.send(embed);
    message.delete();
};
