import getFileNames from "./utils/getFilenames.js";

/**
 * @param {string} filename
 */

async function AutoCut(filename) {
    let filenames = await getFileNames(filename)
    if (filenames.length > 1) {
        
    }
}

export default AutoCut;
