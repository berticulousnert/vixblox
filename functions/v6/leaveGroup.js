const vixError = require("../../util/vixError")
const noblox = require("noblox.js");
// credit to aoi.canvas akaka Lordex.js

module.exports = {
    name: "$leaveGroup",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        let [groupid] = data.inside.splits;
        try {
        if(!groupid) {
           return vixError(d, "GroupID required.");
        } else if(groupid) {
            let userdata = await noblox.leaveGroup(groupid)
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