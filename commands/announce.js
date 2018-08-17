const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("You have forgotten our important message!");
  if(!message.member.hasPermission("ADMINISTRATOR"));
  let announcement = args.slice(1).join(" ");
  let annembed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#4286f4")
    .setThumbnail("https://cdn.discordapp.com/icons/479464813290848271/591c100491cdd61bb887dbfa961e8131.png")
    .addField("TheOriginMC Announcement", announcement)
    .setFooter("Check out our server TheOriginMc.Net or Play.TheOriginMc.net");
    let announceChannel = message.guild.channels.find(`name`, "announcement");
    if (!announceChannel) return message.channel.send("this channel doesn't exist.");
    message.delete().catch(O_o = {});
    announceChannel.send(annembed);  
};