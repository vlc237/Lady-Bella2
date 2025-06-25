const settings = require("../settings");
async function aliveCommand(sock, chatId) {
    try {
        const message = `*♠️𝗕𝗘𝗡 10 𝗠𝗗 IS ACTIVE 24/7!*\n\n` +
                       `*Version:* ${settings.version}\n` +
                       `POWERED BY SNOWBIRD `;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363399707841760@newsletter',
                    newsletterName:'𝗕𝗘𝗡 10 𝗠𝗗 𝗕𝗢𝗧',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: '𝗕𝗘𝗡 10 𝗠𝗗  is alive!' });
    }
}

module.exports = aliveCommand;