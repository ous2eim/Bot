
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yuri')
        .setDescription('Répond avec un message.'),
    async execute(interaction) {
        await interaction.reply('Coucou ! Je suis Yuri 💖');
    },
};
