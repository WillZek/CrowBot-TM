let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `🍓𝐺𝑅𝑈𝑃𝑂𝑆 𝑂𝐹𝐼𝐶𝐼𝐴𝐿𝐸𝑆

    *_╭━━━⊜ 𝚂𝙰𝙺𝚄𝚁𝙰-𝙾𝙵𝙲_*
  *_┃🌿❏ ${gp1}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ 𝚂𝙰𝙺𝚄𝚁𝙰-𝙶𝙻𝙾𝙱𝙰𝙻_*
  *_┃🐢❏ ${gp2}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

 🦋𝐺𝑅𝑈𝑃𝑂𝑆 𝐸𝑁 𝐶𝑂𝐿𝐴𝐵𝑂𝑅𝐴𝐶𝐼𝑂𝑁:

    *_╭━━━⊜ 𝙲𝚄𝚁𝙸𝙾𝚂𝙸𝚃𝚈 𝚂𝙺_*
  *_┃🌿❏ ${gp3}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ 𝙽𝙾𝚅𝙰.𝚂𝙰𝙺𝚄_*
  *_┃🐢❏ ${gp4}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ 𝙼𝚄𝙻𝚃𝙸𝙱𝙾𝚃𝚂_*
  *_┃🌿❏ ${gp5}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

  🌤𝐶𝐴𝑁𝐴𝐿 𝑂𝐹𝐼𝐶𝐼𝐴𝐿

    *_╭━━━⊜ 𝙲𝙰𝙽𝙰𝙻 𝙾𝙵𝙲_*
  *_┃🐢❏ ${channel}_*
*_╰━━━━━━━━━━━━━━━━⊜_*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler