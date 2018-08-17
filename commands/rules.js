const Discord = require("discord.js");
var client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR"));
    let embed = new Discord.RichEmbed()
    .setAuthor(`SERVER RULES `)
    .setDescription("All of the following below is forbidden and can/will lead to punishments on their own accord.\n\n1. Any malicious files or links intending to get information, attack, or blackmail.\n\n2. Any pornographic images, links/videos of underage people. Sending these images, links/videos are not accepted in this discord no matter what.\n\n3. Stealing accounts, identity/information.\n\n4. DDoS threats, DOX leaks.\n\n5. Promoting self-harm, suicidal encouragement, or anything potentially dangerous to the health of another person.\n\n6. Impersonating a staff member, VIP user, or a youtuber/famous, intending to scam or exploit something.\n\n7. Disrespecting staff or members of this server is NOT allowed. Everyone is different but in the end, they are human; no matter what mistake they have done or what grudge you have, please do not start drama in the discord.\n\n8. Excessive spam/flooding the discord (usually prevented by bots)\n\n9. Self-advertisement or advertisement in general.\n\n10. Toxicity can also be punishable\n\nPlease abide by these rules, its purpose is to improve our community and make the server as a whole more enjoyable.")
    .setColor("#4286f4")
    .setTimestamp();
    message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dumb'],
  permLevel: 0
};

exports.help = {
  name: 'rules',
  description: 'Show rules',
  usage: 'rules'
};