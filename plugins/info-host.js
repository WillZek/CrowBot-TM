let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `*¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 📱⏳

¡Tenemos la solución perfecta para ti! 🎉 Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 💸 

🖥️ *Totalmente compatible con GataBot:* Disfruta al máximo de su potencial en nuestros servidores de alto rendimiento, asegurando una experiencia fluida y de alta calidad. El staff de GataBot y CorinPlus Host se encarga de que disfrutes de todas sus funciones al máximo. 😺✨

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://dash.corinplus.com

*🟢 Dashboard:*
https://dash.corinplus.com

⚙️ *Panel*
https://panel.corinplus.com

💥 *Comunidad de WhatsApp:*
https://chat.whatsapp.com/HR3OLhsuZPqCMImzuHcuON

*🟣 Discord:*
https://discord.com/invite/bjKpRBtkHv

🧡 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029VakfOZfHFxP7rNrUQk2d

🗣📲 *Contacto:*
• wa.me/5214531287294
• wa.me/573147616444
• https://www.facebook.com/elrebelde21
• wa.me/50557865603
No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐂O𝐑𝐈𝐍𝐏𝐋𝐔𝐒-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/551d3d544d7bc607fd337.jpg', 
sourceUrl: 'https://dash.corinplus.com'}}},
{ quoted: fakegif3})
}
handler.tags =['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'corinplus', 'corinplushost', 'hosting']
export default handler