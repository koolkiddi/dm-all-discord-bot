const {RichEmbed} = require('discord.js')

module.exports.run = (client, message, args) => {
    const content = args.join(' ');
    const embed = new RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/icons/570744238824882191/6d9624ba594d2b869d7c3f8ebf0ae429.jpg")
        .setTitle("__**Nouvelle notification CyberBug**__")
        .setDescription(content)
        .addField("CyberBug Bot", "[Inviter le bot](https://discordapp.com/api/oauth2/authorize?client_id=659896411747254302&permissions=3073&scope=bot) - [Support](https://discord.gg/2qFja59)", false)

    Promise.all(message.guild.members.map(member => member.send('', embed)).catch(console.log(`Can't send a message to ${member.user.username}.`)))
    .then(()=>{
        message.channel.send('Message envoyé à tout le monde.');
    })
}