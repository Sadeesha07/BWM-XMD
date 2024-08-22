const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BTbTg4VzFxWldaZ096TDAxQmYzU2IyWURVc05ndjZhSzBxSG9tQmJrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFZCSjRFSU9kQjlBVysxZVhDZmpwMENvb093cUlwaERmVHJXRmROcEowST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQzY5dFZ5aWlyZTUwd1lYSWRlZkJtN0N4VzV6NHAvUHFYankxMHRMUTF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFWmRwMnJpWDVpTll1eURSRXhLc0VDZ0p5WlJzN2t3V0daZVRZakVlbFhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJcm15ZWJpTU9NemlBUlJhbVlnZ0dCVlNDZ2VIbmJ6Tk9wQUp1MnNrV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitrQUE3cE5qOTNpUytmRjE5WGN5UlNIRklmRlFDNG9FWisrbVh2aDNhemc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUcvWDF6SXJTM25tek00UW42SXQ0b0RpVG8yM1BuekdWWWpqYWVaZ04zOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGQ1ckdKRDNmSGd6Z0l3SVlidjNaMkFiSHdqQ1VvWmZqZUdEN0lKZ1F3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBudVpvK0tyYXBudkhVTnI5QTNXWDBUVlNSRFNYZnJzeE5BUWdvS0orRWh3enpUZm56TktPWDNBQTVBekFBZGJ5cThoZnRkcU5VWlNBYWVxcmxPVEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJLeWw0bi9kUGVaSmNsd0k2YVhJL2g4Q2pTY25ERzdXMEZPdEI1aXFzVlVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI0NTc1ODMyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVGRkIwMTkzNjFBOUU2QTc4ODRBNjcwNTFEREM1Rjg4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQzNjE2ODV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkN5UEwwVjczUWVtMU1MR3J0LVRXN0EiLCJwaG9uZUlkIjoiNGQ5MDJlN2UtODI1My00Njc5LTg3ODItN2EyYmMzN2ViNjgyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQyR1Z0M1RoZTcyWkpIY2ZidDU0WFZCQ2EwST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRWpYc1MrWHcyN0lQdVpQdTBNOTZLNVoxMHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkRITEdNSFgiLCJtZSI6eyJpZCI6Ijk0NzI0NTc1ODMyOjE4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQUHB6dGdFRU1QWG5yWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJheHpFMG9NeVFuTXZuK2t1S290L1BUT1NwdUh5d3NjdVZ4Vk1WZ3ZCL2pJPSIsImFjY291bnRTaWduYXR1cmUiOiJLSFZXVkRIZlJ3SnQvdUdaRU11K1NhRHd6SHV1YjdwNVN6TmhoN2VOTytLaTdMUFpyNFhlZWZES2FuQnluZkNLNC9UWTVVU2E0Y2h2NGUyK1dEcnJBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRVpLclFtYlhkZ3p4NU9zWEZsc25FT25ndWhyMi8yeFp5Q09lTWlNMXMwZHVIUEJDY1JKNkNHWFlmQlcrQnp1S3dtalgwczY1dnBUaC9EZHNJVGs3QlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNDU3NTgzMjoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXc2N4TktETWtKekw1L3BMaXFMZnowemtxYmg4c0xITGxjVlRGWUx3ZjR5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MzYxNjgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUczeCJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "sadeesha",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " sadeesha",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


