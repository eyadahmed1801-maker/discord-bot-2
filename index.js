const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.get('1402807643470561320');

  if (!channel) return;

  channel.send(`👋 أهلاً بيك يا ${member} في السيرفر ❤️`);
});

client.login(process.env.TOKEN);


client.once('ready', () => {
  console.log('✅ البوت شغال!');
});