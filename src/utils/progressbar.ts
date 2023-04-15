import cliProgress from "cli-progress"

function progressBar() {
    cliProgress.SingleBar({}, cliProgress.Presets.legacy)
}

export default progressBar;