const vixError = require("../../util/vixError")
const noblox = require("noblox.js");
// credit to aoi.canvas akaka Lordex.js

module.exports = {
    name: "$getPlayerHeadshot",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        let [user, size = "720x720", format = "png", iscircular = "false", croptype = "Headshot"] = data.inside.splits;
        try {
        if(!user) {
           return vixError(d, "Only one argument is requied and that is: Userid to find the user Optionals: Size: The size of the image to be returned; defaults highest resolution, Format: The file format of the returned thumbnails, IsCircular: Return the circular version of the thumbnails, Croptype: The style of thumbnail that will be returned");
        } else if(user) {
            let userdata = await noblox.getPlayerThumbnail(user, size, format, iscircular, croptype)
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