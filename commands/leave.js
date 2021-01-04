const config = require('../config.json')
const {RichEmbed} = require('discord.js')

module.exports.run = (client, message, args) => {
    const embed = new RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/icons/570744238824882191/6d9624ba594d2b869d7c3f8ebf0ae429.jpg")
        .setTitle("📌**"+message.author.username+" a retiré CyberDM.**")
        .addField(":clipboard: __Nom du serveur__", message.guild.name, true)
        .addField(":bar_chart: __Nombre de membres__", message.guild.members.size, true)
        .addField("__Propriétaire__", message.guild.owner,true)
        .addField(":pencil: __ID du serveur__", message.guild.id, true);
    client.guilds.find(g=>g.id == config.taguildeid).channels.find(c=>c.id==config.channeldelogs).send(embed);
    message.guild.leave()
}
