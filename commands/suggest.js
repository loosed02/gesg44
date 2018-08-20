const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    if(!msg.member.hasPermission("SEND_MESSAGES"));
    if(args[0] == "in-game"){
        let error1 = new Discord.RichEmbed()
        .setAuthor("Suggestion - Error")
        .setDescription("Sorry, please provide an argument")
        .setColor("#4286f4");
        if(!args[0]) return msg.channel.send(error1);
        let channel = client.channels.get("478642388898938894");
        if (!channel) return;
        const embed = new Discord.RichEmbed()
        .setAuthor("Suggestion Channel")
        .setColor("#4286f4")
        .setDescription(args.join(" "))
        .setFooter(`User: ${msg.author.id}`);
        client.channels.get("478642388898938894")
        .then (wh => {
            wh.send(embed)
        })
        .then(() => {
            let correct = new Discord.RichEmbed()
            .setAuthor("Suggestion")
            .addField("Suggestion have been send!", "Thanks for the suggestion! We will check your suggestion when we can!\nTroll suggestions will result as blacklist. You will not be able to use ``TheOriginMC`` bot.\nDo not spam the suggestion box either.")
            .setFooter("Check out -help for more commands!")
            .setColor("#4286f4");
            msg.channel.send(correct)
            wh.delete();
            return;
        });
      msg.channel.send("/suggest [in-game/Discord\ suggestion");
    }
}