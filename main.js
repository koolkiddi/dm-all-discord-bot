const Discord = require('discord.js');
const prefix = '+';
const config = require('./config.json')
const bot = new Discord.Client();

bot.on('ready', ()=>{
    console.log(`Connected : ${bot.user.username} !`);
    bot.user.setActivity("+help | " + bot.guilds.size + " serveurs", {type: "PLAYING"})
})

bot.on('message', message=>{
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(require('./embeds/notfound'));
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    try {
    require(`./commands/${command}`).run(bot, message, args);
    } catch (err) {
        console.log(err)
        if (command == "embedmsg" || command == "discordpub") return;
        return message.channel.send(require('./embeds/notfound'));
    }
})

bot.on('guildCreate', guild =>{
        const embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/icons/570744238824882191/6d9624ba594d2b869d7c3f8ebf0ae429.jpg")
        .setTitle("📌**Merci à " + guild.name + " d'avoir ajouté CyberDM.**")
        .addField(":clipboard: __Nom du serveur__", guild.name, true)
        .addField(":bar_chart: __Nombre de membres__", guild.members.size, true)
        .addField(":computer: __Nombre de salons__", guild.channels.size, true)
        .addField("__Propriétaire__", guild.owner,true)
        .addField(":earth_americas: __Région__", guild.region, true)
        .addField(":pencil: __ID du serveur__", guild.id, true);
        bot.guilds.find(g=>g.id == config.taguildeid).channels.find(c=>c.id==config.channeldelogs).send(embed);
})

bot.login('TOKEN');
