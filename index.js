const noblox = require("noblox.js")
let fs = require("fs");
let path = require("path");
// const vixError = require("./util/vixError.js");
// const vixWarn = require("./util/vixWarn.js");
const { boolean } = require("./util/slashOption.js");

module.exports = {
    load: (vixblox) => {

        const bot = vixblox.bot || vixblox.client;
        const cookie = null || String
        const vixsuppressErrors = boolean
        const et = Lobj.ErrorsType || "message";
        const vers = "v6";
        const util = vixblox.Util || "none"

        this.data = {
            "bot": bot,
            "cookie": cookie,
            "errortype": et,
            "suppressErrors": vixsuppressErrors,
            "version": vers
            
        };

        if (util && util !== "none") {
            util.parsers.ErrorHandler = require("./util/parser.js").AllParser;
        };

        if (vers && vers.toLowerCase() === "v6") {
            for (const file of fs.readdirSync(path.join(__dirname, "./functions/v6")).filter(file => file.endsWith(".js"))) {
                var thefunction = require("./functions/v6/"+file);
                bot.functionManager.createFunction(
                    thefunction
                );
            };
            console.log(`\x1b[96m|---------------|\n|---\x1b[97mVixBlox\x1b[96m---|\n|----\x1b[97mLoaded.\x1b[96m----|\n|-----\x1b[97maoiv6\x1b[96m-----|\n|---------------|\x1b[0m`);
            
        } else {
           vixWarn.newWarn("Version '"+vers+"' not found!!!!! please set version to \"v6\". If you dont change it to supported version aoi.vixblox will not work!")
        };

    },

    getData: () => {
        return this.data;
    },

    utils: {
        vixError: require("./util/vixError.js"),
        vixWarn: require("./util/vixWarn.js"),
        parser: require("./util/parser.js")
    },
};