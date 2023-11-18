const vixError = require("../../index.js").utils.vixError;
const noblox = require("noblox.js");
// credit to aoi.canvas akaka Lordex.js

module.exports = {
    name: "$getPlayerInfo",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        let [userid] = data.inside.splits;
        try {
        if(!userid) {
            return vixError.newError(d, "You require a userID to continue.");
        } else if(userid) {
            let information = await noblox.getPlayerInfo({userId: userid})
            data.result = information
        }
    } catch (err) {
        vixError.newError(d, err)
    }
        return {
            code: d.util.setCode(data),
            data: d.data
        };
    }
};