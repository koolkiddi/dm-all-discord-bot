module.exports.run = (client, message, args) => {
    const content = args.join(' ');
    Promise.all(message.guild.members.map(member => member.send(content).catch(console.log(`Can't send a message to ${member.user.username}.`))))
    .then(()=>{
        message.channel.send('Message envoyé à tout le monde.');
    })
}
