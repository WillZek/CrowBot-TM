let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `✅ *El Bot Ha Sido Desactivada En Este Chat*`, m, rcanal)

}
handler.help = ['banchat']
handler.tags = ['mods']
handler.command = /^banchat$/i
handler.mods = true 
export default handler
