const vixError = require("../../util/vixError")
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
           return vixError(d, "You require a userID to continue.");
        } else if(userid) {
            let userdata = await noblox.getPlayerInfo({userId: userid})
            var commanddata = JSON.stringify(userdata);
        }
        data.result = commanddata
    } catch (err) {
        console.error(err)
       return vixError(d, err)
    }
        return {
            code: d.util.setCode(data),
        };
    }
};