// Why i made file for only this...
// Idk why i copied this but thanks

module.exports = {
    newWarn: (msg) => {
        try {
            console.log(`\x1b[33mVixBloxWarning:\x1b[97m ${msg}`);
        } catch (err) {
            // Hi
        }
    }
}