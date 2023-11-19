const vixError = require("../../util/vixError")
const noblox = require("noblox.js");
// credit to aoi.canvas akaka Lordex.js

module.exports = {
    name: "$leaveGroup",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        let [groupid, token] = data.inside.splits;
        try {
        if(!groupid && !token) {
           return vixError(d, "GroupID and token is required.");
        } else if(groupid && token) {
            let userdata = await noblox.leaveGroup(groupid, token)
            var commanddata = JSON.stringify(userdata);
        }
        data.result = commanddata
    } catch (err) {
        
       return vixError(d, err)
    }
        return {
            code: d.util.setCode(data),
        };
    }
};