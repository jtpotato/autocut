import { glob } from "glob";

/**
 * 
 * @param {string} filename 
 * @returns {Promise<string[]>}
 */
async function getFileNames(filename) {
    let filenames = await glob(filename)
    return filenames;
}

export default getFileNames;