const moment = require('moment');
client.on('guildMemberAdd', member => {
  let welcomer = member.guild.channels.find('name','welcome')
  moment.locale('ar-ly');
  var mrx = member.user;
let mrxembed = new Discord.RichEmbed()
.setTitle(mrx.username,`:id: ${mrx.id}  :hash:${mrx.discriminator}`)
.addField('» ??? ??? ????? ?????????',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
.addField('» ??? ??? ????? ???????',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)   
.addField('» ??? ???',`${member.guild.memberCount}`)
.setThumbnail(mrx.avatarURL)
.setFooter(client.user.username,client.user.avatarURL)
welcomer.sendEmbed(mrxembed);
});