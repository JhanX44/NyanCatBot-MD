import fs from 'fs'
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	
	//Texto
	global.adimagen = `🌅| Iᴍᴀ́ɢᴇɴᴇs Bʏ NʏᴀɴCᴀᴛBᴏᴛ🌿`
	global.adanime = `🌸| Aɴɪᴍᴇ Bʏ NʏᴀɴCᴀᴛBᴏᴛ🈴`
	global.adyoutube = `🍁| Dᴇsᴄᴀʀɢᴀs ᴅᴇ YᴏᴜTᴜʙᴇ🍄`
	global.adsticker = `🏞️| Sᴛɪᴄᴋᴇʀs Bʏ NʏᴀɴCᴀᴛBᴏᴛ🌺`
	global.addescargas = `📤| Dᴇsᴄᴀʀɢᴀs Bʏ NʏᴀɴCᴀᴛ🌸`
	
	//Fotos
	
} 
export default handler
