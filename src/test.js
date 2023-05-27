import AutoCut from './index.js'

AutoCut(process.argv[2]).then(() => {
    console.log('Process completed.')
})