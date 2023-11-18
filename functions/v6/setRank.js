const vixError = require("../../util/vixError")
const noblox = require("noblox.js");
// credit to aoi.canvas akaka Lordex.js

module.exports = {
    name: "$setRank",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        let [groupid, user, change, token] = data.inside.splits;
        try {
        if(!groupid && !user && !change && !token) {
           return vixError(d, "All three arguments are required: GroupID, Target, Rank The rank, roleset ID, name of the role, or the actual Role itself, Roblox Account Cookie");
        } else if(groupid && user && change && token) {
            let userdata = await noblox.setRank({group: groupid, target: user, rank: change, jar: token})
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