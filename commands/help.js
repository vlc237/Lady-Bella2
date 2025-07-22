const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message, channelLink) {
  const helpMessage = `
${settings.botName || ''} 
╭━━━✦❮ *𝙱𝙴𝙽 10 𝙼𝙳* ❯✦━⊷
┃★╭━━━━━━━━━━━━━━⊷
┃★┃✪ 𝙾𝚠𝚗𝚎𝚛 : 𝚂𝙽𝙾𝚆𝙱𝙸𝚁𝙳
┃★┃✪ 𝙿𝚛𝚎𝚏𝚒𝚡  : [ . ]
┃★┃✪ 𝙼𝚘𝚍𝚎 : 𝙿𝚞𝚋𝚕𝚒𝚌
┃★┃✪ 𝚁𝚊𝚖 : 8/132 GB
┃★┃✪ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : 𝙿𝚊𝚗𝚎𝚕
┃★┃✪ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : 𝚂𝙽𝙾𝚆𝙱𝙸𝚁𝙳
┃★┃✪ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 : 103
┃★┃✪ 𝚃𝚑𝚎𝚖𝚎 : 𝙱𝙴𝙽 10 𝙼𝙳
┃  ╰━━━━━━━━━━━━━━━━⊷
╰━━━━━━━━━━━━━━━━━❖
 
╭━━━✦❮ *𝚂𝚎𝚕𝚎𝚌𝚝 𝚌𝚊𝚝𝚎𝚐𝚘𝚛𝚢* ❯✦━⊷

╭━━━━━━━━━━━━━━━⬡*
╭━━━━━━━━━━━*
┃❍-1️⃣.  𝙶𝚎𝚗𝚎𝚛𝚊𝚕
┃❍-2️⃣.  𝙰𝚍𝚖𝚒𝚗 
┃❍-3️⃣.  𝙾𝚠𝚗𝚎𝚛
┃❍-4️⃣.  𝙸𝚖𝚊𝚐𝚎
┃❍-5️⃣.  𝙶𝚊𝚖𝚎
┃❍-6️⃣.  𝙰𝚒 𝚜𝚎𝚊𝚛𝚌𝚑      
┃❍-7️⃣.  𝙵𝚞𝚗    
┃❍-8️⃣.  𝚃𝚎𝚡𝚝𝚖𝚊𝚔𝚎𝚛 
┃❍-9️⃣.  𝙳𝚘𝚠𝚗𝚕𝚊𝚍   
┃❍-🔟.  𝙶𝚒𝚝𝚑𝚞𝚋  
╰━━━━━━━━━━━━━━━━━━
╰━━━━━━━━━━━━━━━━━⬡*

𝚁𝚎𝚙𝚕𝚢 𝚠𝚒𝚝𝚑 .(𝚗𝚞𝚖𝚋𝚎𝚛) 𝚝𝚘 𝚜𝚎𝚎 𝚖𝚘𝚛𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜

*𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚝𝚑𝚎 𝙲𝚢𝚋𝚎𝚛𝚍𝚎𝚟𝚜 𝙲𝚕𝚞𝚋:* ${channelLink}
`;


  try {
    const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
    const audioPath = path.join(__dirname, '../assets/welcome.mp3');

    const buttons = [
      { buttonId: '.general', buttonText: { displayText: 'General Commands' }, type:1 },
      { buttonId: '.admin', buttonText: { displayText: 'Self Commands' }, type:1 },
      { buttonId: '.self', buttonText: { displayText: 'Self Commands' }, type:1 },
      { buttonId: '.image', buttonText: { displayText: 'Image/Sticker Commands' }, type:1 },
      { buttonId: '.game', buttonText: { displayText: 'Game Commands' }, type:1 },
      { buttonId: '.ai', buttonText: { displayText: 'AI Commands' }, type:1 },
      { buttonId: '.fun', buttonText: { displayText: 'Fun Commands' }, type:1 },
      { buttonId: '.textmaker', buttonText: { displayText: 'Textmaker' }, type:1 },
      { buttonId: '.downloader', buttonText: { displayText: 'Downloader' }, type:1 },
      { buttonId: '.github', buttonText: { displayText: 'Github Commands' }, type:1 },
    ];

    const buttonMessage = {
      image: fs.existsSync(imagePath) ? { url: imagePath } : null,
      caption: helpMessage,
      footer: 'Select a category to view commands',
      buttons: buttons,
      headerType:4,
      contextInfo: {
        forwardingScore:1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363399707841760@newsletter',
          newsletterName: '𝗕𝗘𝗡 10 𝗠𝗗',
          serverMessageId: -1,
        },
      },
    };

    await sock.sendMessage(chatId, buttonMessage, { quoted: message });

    // Send audio message
    if (fs.existsSync(audioPath)) {
      await sock.sendMessage(chatId, { audio: { url: audioPath }, mimetype: 'audio/mp4' }, { quoted: message });
    }
  } catch (error) {
    console.error('Error in help command:', error);
    await sock.sendMessage(chatId, { text: helpMessage });
  }
}

module.exports = helpCommand;
