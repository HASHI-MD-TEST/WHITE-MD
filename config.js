const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JhIx1ILS#IYe_ouHmB2RM48JeN2LVck7n2xTRlFghjjETDxztZv0",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "Enter The Image URL",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO IM WHITE MD CREATED BY HASHAN <NOW ALIVE> ",
};
