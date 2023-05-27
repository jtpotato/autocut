import { exec } from 'child_process';
function setup() {
    // pip install auto-editor and whisper
    exec('pip install auto-editor openai-whisper --upgrade', (err, stdout, stderr) => {
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