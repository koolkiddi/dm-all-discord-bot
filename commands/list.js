const {RichEmbed} = require('discord.js')

module.exports.run = async (client, message, args) => {
    let content = "Je ne peux pas créer d'invitations pour\n";
    let cant = false;
    const embed = new RichEmbed()
        .setTitle("Mes serveurs:");
    for (guild of client.guilds.values())
    {
        try {
        let invite = await guild.channels.random().createInvite();
        embed.addField(guild.name, `[Invite](${invite})`)
        } catch (err) {
            console.log(err)
            content += "- "+ guild.name+"\n";
            cant = true;
        }
    }
    message.channel.send(embed)
    if (cant) message.channel.send(content)
}
