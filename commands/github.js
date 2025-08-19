async function githubCommand(sock, chatId) {
    const repoInfo = `*Lady bella*

*Github:*
https://github.com/SNOWBIRD0074/BEN-10-MD

*Dont forget to star✨and fork our repo

*GET YOURS NOW TYPE /pair 263..(your # no +'):*

//telegram.me/Lady_bella1_Bot

_Enjoy ⬆️⬆️!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363399707841760@newsletter',
                    newsletterName: 'Lady bella',
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