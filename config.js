const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' }) 


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/IBRAHIM-MD/tree/main";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JE3gJsV15ly9ViU6lgw0GD";
global.website=process.env.GURL || "https://www.youtube.com/@ibrahimmdgpt" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923419159670" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923419159670";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923419159670";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg",
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "25471077266,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254710772666,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://ibrahim-tech-1-4a7321f212d3.herokuapp.com/";

module.exports = {

  menu: process.env.MENU || "A17_MD", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©ⁱᵇʳᵃʰⁱᵐ ᵗᵉᶜʰ💥90✴" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "M ASWAD",
  packname: process.env.PACK_NAME || "M ASWAD",
  botname : process.env.BOT_NAME  || " M ASWAD",
  ownername:process.env.OWNER_NAME|| "M ASWAD",

  sessionName:process.env.SESSION_ID || "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pTZm1lekVvOE95Q081MzlMN1JhMkFwdGNZZnZnT2hoYU9xZzZkTkFFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXdkdi9hZnFWY013YWhxMVFTQUlQSTFiRUg5SjJYTmFuMWpoOWo3NEdVND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUHFzc0YwZHZyVWR1cXc3UDlmS2xZSG10SWdFU3dpSDVzMVRGZUJZSWxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSN3JHbjErNlRYUlJFVVk0UHRJQk1mdlRwK3M1Wkp1M1E0YlBESi9sTmhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBL0VZaHZOK1FtemFxRHpkMEhZcUNDSitXMUlnY3lJNVgzUTFRc3p5VzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5YejNma0IvUXlkKzY3eUh1dkl5SStYY0cvemc1WVJzaEZPMGxBdHAwRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tGSnpORlZ1aGc2cFBPQ0gvVGJ0ZE43SEhwVFBWbVZqMHdwbkZwSjUyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzRIb1BRaG1rVHpTa3hvZVVTc09mTFpDOE91N1VxZElIc0t3elZOMUlTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdISjk5R3hxRVczT243d3ZVSWNZZHUxRXZJQ1RCdVlmU3Zpb3FIeGJmeGY3S0JjWWxPcHlQRk5kclJ4V3YvS2pWZ3YwUC9LMTQ3aWhaZVBsQW1DbWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiI3VEJVa05WWUpYZjdWVG84ZHZVVGo5dTJhSmhnNXVIODRTeXRqQXNaSzlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0SHh2QndpN1E4ZXhrN013bFNGZDZnIiwicGhvbmVJZCI6IjYxOTliOTUzLWRmMWMtNDVmNi05MWExLTU0MGJmNzU1ZTA3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQdVoxUGZHUlRSc0pWcUNuZHFua0txUHdob0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFBVejRQU1RFZXJsc1dLbDhpSXpmVzVad1dnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhOMjM4M0wxIiwibWUiOnsiaWQiOiI5MjM0MTkxNTk2NzA6NTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiKn4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDYXJNY0ZFT3ZmZ3JJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNiN3ovRFY4Q3I0c09HSXZJZ1dVRElWR1dVaUhUZDdwaVpDWEh3dGRieWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFkUldxbkM2ckhuZWdzTHJjNkJRSndFSG5qeEJYOCtGU0FHdmlraFFtaE1aTG9ac2o0SWMxNG1aYmJxblRQYjNTNkhhNG9IZEw5bVpyZXdUZTErdEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxWmkvdmx3WmJVY2o0OGdYT2lmMG5VN2hiWDk0dzlLUmdsNVFmNk5Ldit4aDVZMUEzbVp0S0s4bmcyNTFjQS9rL1Mwcmp5OG1adzVNSDVUMm0wTnNpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQxOTE1OTY3MDo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiRys4L3cxZkFxK0xEaGlMeUlGbEF5RlJsbEloMDNlNlltUWx4OExYVzhwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NTE1MzgzfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};




























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
 
