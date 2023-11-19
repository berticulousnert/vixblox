const noblox = require("noblox.js")
let fs = require("fs");
let path = require("path");
const vixError = require("./util/vixError.js");
const vixWarn = require("./util/vixWarn.js");
const vixloadmsg = require("./util/vixloader.js")

module.exports = {
    load: (vixblox) => {

        const bot = vixblox.bot || vixblox.client;
        const vixerr = vixblox.enableErrors || false;
        const et = vixblox.errortype || "message";
        const vers = vixblox.version || "v6";

        this.data = {
            "bot": bot,
            "errortype": et,
            "enableErrors": vixerr,
            "version": vers,
        };

        if (vers && vers.toLowerCase() === "v6") {
           for (const file of fs.readdirSync(path.join(__dirname, "./functions/v6")).filter(file => file.endsWith(".js"))) {
                var thefunction = require("./functions/v6/"+file);
                console.log("Loaded: " + file)
                bot.functionManager.createFunction(
                    thefunction
                );
            };
            vixloadmsg(  [{ text: `VixBlox a port from Noblox to Aoi.js`, textColor: "green" }],
            "white",
            { text: 'aoi.vixblox ', textColor: "cyan" });
            
        } else {
           vixWarn("Version '"+vers+"' not found!!!!! please set version to \"v6\". If you dont change it to supported version aoi.vixblox will not work!")
        };

        if (et !== "console" && et !== "msg" && et !== "message" && et !== "none") {
           vixWarn(`Unknown 'ErrorsType' option type. AoiCanvas Errors would not be shown.`);
        };


    },

    getData: () => {
        return this.data;
    },

    utils: {
        vixError: require("./util/vixError.js"),
        vixWarn: require("./util/vixWarn.js"),
    },
};