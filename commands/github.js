async function githubCommand(sock, chatId) {
    const repoInfo = `*⚙️𝗕𝗘𝗡 10 𝗠𝗗*

*🌍 𝙂𝙄𝙏𝙃𝙐𝘽 𝙍𝙀𝙋𝙊:*
https://github.com/SNOWBIRD0074/BEN-10-MD

*🚘 𝙊𝙐𝙍 𝙈𝘼𝙄𝙉 𝘾𝙃𝘼𝙉𝙉𝙀𝙇:*
https://whatsapp.com/channel/0029Vb5nSebFy722d2NEeU3C

_𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝙎𝙉𝙊𝙒𝘽𝙄𝙍𝘿!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363399707841760@newsletter',
                    newsletterName: '𝗕𝗘𝗡 10 𝗠𝗗',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
