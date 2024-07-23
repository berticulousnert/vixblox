const noblox = require("noblox.js");
let fs = require("fs");
let path = require("path");
const vixWarn = require("./util/vixWarn.js");
const vixloadmsg = require("./util/vixloader.js");
const {dependencies} = require('../package.json');
let version = dependencies["aoi.js"]

module.exports = {
  load: (vixblox) => {
    const bot = vixblox.bot || vixblox.client;
    const vixerr = vixblox.enableErrors || false;
    const et = vixblox.errortype || "message";
    const dbt = vixblox.dbtable || "0"

    this.data = {
      bot: bot,
      errortype: et,
      enableErrors: vixerr,
      dbtable: dbt
    };

    if (version.includes("^6")) {
      for (const file of fs
        .readdirSync(path.join(__dirname, "./functions/v6"))
        .filter((file) => file.endsWith(".js"))) {
        var thefunction = require("./functions/v6/" + file);
        bot.functionManager.createFunction(thefunction);
      }
      vixloadmsg(
        [{ text: `VixBlox a port from Noblox to Aoi.js`, textColor: "green" }],
        "white",
        { text: "aoi.vixblox ", textColor: "cyan" }
      );
    } else {
      vixWarn(
        "Version '" +
          vers +
          '\' aoi.vixblox was only made to run on v6.'
      );
    }

    if (et !== "console" && et !== "msg" && et !== "message" && et !== "none") {
      vixWarn(
        `Unknown 'ErrorsType' option type. aoi.vixblox Errors would not be shown.`
      );
    }
  },

  getData: () => {
    return this.data;
  },

  utils: {
    vixError: require("./util/vixError.js"),
    vixWarn: require("./util/vixWarn.js"),
  },
};
