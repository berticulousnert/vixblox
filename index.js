const vixWarn = require("./util/vixWarn.js");
const vixloadmsg = require("./util/vixloader.js");
const path = require("path");
const fs = require("fs");

module.exports = {
  load: async (vixblox) => {
    const bot = vixblox.bot || vixblox.client;
    const vixerr = vixblox.enableErrors || false;
    const et = vixblox.errortype || "message";
    const dbt = vixblox.dbtable || "0";

    this.data = {
      bot: bot,
      errortype: et,
      enableErrors: vixerr,
      dbtable: dbt,
    };

    try {
      await new Promise((resolve) => {
        bot.once("ready", () => {
          start();
        });
      });
    } catch (e) {
      console.log(e);
    }

    async function start() {
      try {
        for (const file of fs
          .readdirSync(path.join(__dirname, "./functions/v6"))
          .filter((file) => file.endsWith(".js"))) {
          var thefunction = require("./functions/v6/" + file);
          bot.functionManager.createFunction(thefunction);
        }
          vixloadmsg(
            [
              {
                text: `VixBlox a port from Noblox to Aoi.js`,
                textColor: "green",
              },
            ],
            "white",
            { text: "aoi.vixblox ", textColor: "cyan" }
          );
        }catch (error) {
        console.log(`Vixblox fail to load. ${error}`);
      }

      if (
        et !== "console" &&
        et !== "msg" &&
        et !== "message" &&
        et !== "none"
      ) {
        vixWarn(
          `Unknown 'ErrorsType' option type. aoi.vixblox Errors would not be shown.`
        );
      }
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
