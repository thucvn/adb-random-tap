const { exec } = require('child_process');
const util = require('util');
const ADB_LOCATION = 'D:/DevTools/minisdk/platform-tools/adb.exe';
const TAP_RANGE = {
    TLX: 400,
    TLY: 1000,
    BRX: 650,
    BRY: 1700
}
const TAP_NUM = 10;
const execAsync = util.promisify(exec);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const delay = ms => new Promise(res => setTimeout(res, ms));
(async () => {
    while (true) {
        // await delay(1000);
        let shell = '';
        // build the command
        for (let i = 0; i < TAP_NUM; i++) {
            let x = getRandomInt(TAP_RANGE.TLX, TAP_RANGE.BRX);
            let y = getRandomInt(TAP_RANGE.TLY, TAP_RANGE.BRY);
            if (i == TAP_NUM - 1) {
                shell += `input tap ${x} ${y}`;
            } else {
                shell += `input tap ${x} ${y} & sleep 0.02 & `;
            }
        }
        const adbCommand = `${ADB_LOCATION} shell "${shell}"`
        await execAsync(adbCommand);
    }
})();