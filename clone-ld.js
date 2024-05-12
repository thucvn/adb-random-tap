const { exec } = require('child_process');
const util = require('util');
const LD_LOCATION = 'D:/LDPlayer/LDPlayer9/ldconsole.exe';
const execAsync = util.promisify(exec);
(async () => {
    for (let i = 100; i < 151; i++) {
        try {
            const { stdout, stderr } = await execAsync(`${LD_LOCATION} copy --name fomoTeam${i} --from 50`);
            console.log('stdout:', stdout);
            console.error('stderr:', stderr);
        } catch (error) {
            // console.error('Error executing command:', error);
        }

    }
})();