 /**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(resolve => {setTimeout(resolve, millis)})
}
/**defines an asynchronous function sleep that introduces a delay by waiting for a 
specified number of milliseconds using a Promise and setTimeout. It pauses the execution for the given millis duration.
**/