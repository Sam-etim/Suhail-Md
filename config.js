const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349098281393
";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_55_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYUDhRTUV1ZkQ2RkQzWWtDd1c5WTMyenVtNjJ6UXlSN1RlWXIvdmFyOVJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzLVhpaEMwUVRwdUtSakNFQUkzeWxRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBlY2Y5ZDIyLThiNTQtNDBlMC05NGYzLWY2M2FiZDcxMGE3ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDIyOSxcbiAgICAgIDg4LFxuICAgICAgMjM5LFxuICAgICAgMTEsXG4gICAgICAyMjgsXG4gICAgICAyMDUsXG4gICAgICA3MixcbiAgICAgIDYyLFxuICAgICAgNjksXG4gICAgICA3NCxcbiAgICAgIDExMyxcbiAgICAgIDIwNyxcbiAgICAgIDIxNCxcbiAgICAgIDE2NixcbiAgICAgIDg5LFxuICAgICAgNDAsXG4gICAgICAxMTQsXG4gICAgICAxMSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMTkxLFxuICAgICAgMjQ4LFxuICAgICAgODYsXG4gICAgICAyMTMsXG4gICAgICA0NyxcbiAgICAgIDg3LFxuICAgICAgNDIsXG4gICAgICAyNDUsXG4gICAgICAxNTYsXG4gICAgICA3LFxuICAgICAgMTM1LFxuICAgICAgMjE1LFxuICAgICAgMTgyLFxuICAgICAgMTgsXG4gICAgICAxMzMsXG4gICAgICAxODQsXG4gICAgICAyMDksXG4gICAgICAyMzQsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjZEUFZNNE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwOTgyODEzOTM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NzE1ODY1MjA1MTU2MToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQQ0pnZHNCRVA2MG03VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjk4Q3JlMWcxOXNXMUdaUnNrQXZFdERFa2J2aDRwU3MzTkFuYm1HdUlyRVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVnpwMHAzRVJBZzg5ci80RnZEU2M2eFhQSVJna3ZURnBQOEpuOVRkbjhTRW1oVnd2VzNPVVBWWGlJL3hXOFJDazZYeE9VRE9TQy9iK2RhREkwK3JvQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicnFYUkdYVS9ZSUdrVm5qeFBySlpWK0l0NlYzR1lRbDV4enJZcTRYaHZvdk5pRUNESWNqKzlSYlVjRERYS2hucXRZY0FJcVJ2U2RnZkVDUUp0dm5vaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA5ODI4MTM5MzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjIxMDk0NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
