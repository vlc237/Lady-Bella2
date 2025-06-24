
const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
═════════*𝗕𝗘𝗡 10 𝗠𝗗*══════════
👑 Owner: SNOWBIRD
🚘 Version: 2.0.0
⚙️ Mode: Public
✅ Host: PANEL
______________________________________

━━⪼ *GENERAL COMMANDS*
┃ .help
┃ .menu
┃ .alive
┃ .ping
┃ .owner
┃ .groupinfo
┃ .staff
┃ .pair
┃ .vv

━━⪼ *FUN & CHAT*
┃ .joke
┃ .quote
┃ .fact
┃ .8ball
┃ .compliment
┃ .insult
┃ .flirt
┃ .character
┃ .truth
┃ .dare
┃ .ship
┃ .simp
┃ .stupid
┃ .wasted

━━⪼ *AI & GPT*
┃ .gpt
┃ .gemini
┃ .chatbot

━━⪼ *ADMIN TOOLS*
┃ .ban
┃ .kick
┃ .promote
┃ .demote
┃ .mute
┃ .unmute
┃ .delete
┃ .warnings
┃ .warn
┃ .clear
┃ .tag
┃ .tagall
┃ .antilink
┃ .antibadword
┃ .resetlink
┃ .autostatus
┃ .antidelete
┃ .clearsession
┃ .cleartmp
┃ .setpp
┃ .mode

━━⪼ *MEDIA / TEXT EFFECTS*
┃ .attp
┃ .tts
┃ .blur
┃ .simage
┃ .sticker
┃ .tgsticker
┃ .meme
┃ .take
┃ .emojimix
┃ .lyrics

━━⪼ *TEXT STYLES*
┃ .metallic
┃ .ice
┃ .snow
┃ .impressive
┃ .matrix
┃ .light
┃ .neon
┃ .devil
┃ .purple
┃ .thunder
┃ .leaves
┃ .arena
┃ .hacker
┃ .sand
┃ .blackpink
┃ .glitch
┃ .fire

━━⪼ *DOWNLOADER*
┃ .play
┃ .song
┃ .instagram
┃ .facebook
┃ .tiktok

━━⪼ *GITHUB*
┃ .git
┃ .github
┃ .sc
┃ .script
┃ .repo

━━⪼ *GAMES*
┃ .tictactoe
┃ .hangman
┃ .guess
┃ .trivia
┃ .answer

━━⪼ *TOOLS*
┃ .weather
┃ .news

┗━━⪼ 📢 *View our channel:* https://whatsapp.com/channel/0029Vb5nSebFy722d2NEeU3C

🔥 Powered by SNOWBIRD | BEN 10 MD Bot
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        const audioPath = path.join(__dirname, '../assets/botsong.mp3');
        const imageBuffer = fs.existsSync(imagePath) ? fs.readFileSync(imagePath) : null;
        const audioBuffer = fs.existsSync(audioPath) ? fs.readFileSync(audioPath) : null;

        if (imageBuffer) {
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363399707841760@newsletter',
                        newsletterName: '𝗕𝗘𝗡 10 𝗠𝗗 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗗 𝗕𝗬 𝗦𝗡𝗢𝗪𝗕𝗜𝗥𝗗',
                        serverMessageId: -1
                    }
                }
            });
        }

        if (audioBuffer) {
            await sock.sendMessage(chatId, {
                audio: audioBuffer,
                mimetype: 'audio/mp4',
                ptt: false,
                contextInfo: {
                    externalAdReply: {
                        title: "BEN 10 MD Theme Song",
                        body: "🎶 Powered by SNOWBIRD",
                        thumbnail: imageBuffer,
                        mediaType: 2,
                        mediaUrl: "https://whatsapp.com/channel/0029Vb5nSebFy722d2NEeU3C",
                        sourceUrl: "https://whatsapp.com/channel/0029Vb5nSebFy722d2NEeU3C"
                    }
                }
            });
        }

    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
