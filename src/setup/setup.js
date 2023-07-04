import { exec } from 'child_process';
function setup() {
    // pip install auto-editor and whisper
    exec('pip install auto-editor --upgrade', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        if (stderr) {
            console.log(stderr);
            return;
        }
    })
    exec('pip install --upgrade git+https://github.com/openai/whisper.git', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        if (stderr) {
            console.log(stderr);
            return;
        }
    })
    console.log("Upgrade complete, installed `auto-editor` and `openai-whisper`.")
}

export default setup