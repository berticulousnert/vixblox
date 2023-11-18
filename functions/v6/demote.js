const vixError = require("../../util/vixError")
const noblox = require("noblox.js");
// credit to aoi.canvas akaka Lordex.js

module.exports = {
    name: "$demote",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        let [groupid, user, token] = data.inside.splits;
        try {
        if(!groupid && !user && !token) {
           return vixError(d, "All three arguments are required: GroupID, Target, Roblox Account Cookie");
        } else if(groupid && user && token) {
            let userdata = await noblox.demote({group: groupid, target: user, jar: token})
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