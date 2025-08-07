
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST().setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('🔁 Enregistrement de la commande...');
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands },
        );
        console.log('✅ Commande enregistrée avec succès !');
    } catch (error) {
        console.error(error);
    }
})();
