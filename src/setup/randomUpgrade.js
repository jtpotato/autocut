import setup from "./setup.js"

function randomUpgrade() {
    if (Math.random() > 0.9) {
        console.log("We have decided that now would be a good time for an upgrade. Do not close the terminal.")
        setup()
    }
}

export default randomUpgrade