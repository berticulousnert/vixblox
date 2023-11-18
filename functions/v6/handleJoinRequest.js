const vixError = require("../../util/vixError")
const noblox = require("noblox.js");
// credit to aoi.canvas akaka Lordex.js

module.exports = {
    name: "$handleJoinRequest",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        let [groupid, user, accept, token] = data.inside.splits;
        try {
        if(!groupid && !user && accept && !token) {
           return vixError(d, "All three arguments are required: GroupID, Target, Roblox Account Cookie");
        } else if(groupid && user && accept && token) {
            let userdata = await noblox.handleJoinRequest(groupid, user, accept, token)
            var commanddata = JSON.stringify({
                groupId: groupid,
                userId: user,
                accepted: true
            });
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