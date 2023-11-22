const vixError = require("../../util/vixError")
const noblox = require("noblox.js");
// credit to aoi.canvas akaka Lordex.js

module.exports = {
    name: "$getusernamefromid",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        let [user] = data.inside.splits;
        try {
        if(!user) {
           return vixError(d, "All three arguments are required: User required so i can find the user.");
        } else if(user) {
            let userdata = await noblox.getUsernameFromId([user])
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