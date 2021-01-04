const { RichEmbed } = require('discord.js')

module.exports = new RichEmbed()
    .setThumbnail("https://cdn.discordapp.com/icons/570744238824882191/6d9624ba594d2b869d7c3f8ebf0ae429.jpg")
    .setTitle("Besoin d'aide ?")
    .setDescription("Voici mes commandes !")
    .addField("+discordpub [MESSAGE]", "Envoie votre pub à tous les membres du serveur où a été faite la commande. Permission requise: Administrateur !", false)
    .addField("+embedmsg", "Envoie votre message de pub en embed à tous les membres du serveur où a été faite la commande. Permission requise: Administrateur !\n\n[Inviter](https://discordapp.com/api/oauth2/authorize?client_id=659896411747254302&permissions=3073&scope=bot) - [Support](https://discord.gg/2qFja59)", false)
    .setFooter("CyberDM Bot - Commands Panel", "https://cdn.discordapp.com/icons/570744238824882191/6d9624ba594d2b869d7c3f8ebf0ae429.jpg")
    .setColor("710085");
