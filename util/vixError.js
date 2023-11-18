module.exports = {
    newError: (d, msg) => {
        try {
            let et = require('../index.js').getData().ErrorsType;
            let data = d.util.aoiFunc(d);

            if (et === "console") {
                console.log(`\x1b[91mVixError:\x1b[97m ${msg}  |  \x1b[94mIn\x1b[97m ${data.function}.  |  \x1b[94mCode: \x1b[97m\`${data.code}\``);
            } else if (et === "msg" || et === "message") {
                d.channel.send(`
${"```js"}\n
VixError: ${msg}
In: "${data.function}"
Where in code: \`${data.code}\`
\n${"```"}`);
            }
        } catch (err) {
            console.log(err)
        }
    }
}