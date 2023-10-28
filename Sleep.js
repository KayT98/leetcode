 /**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(resolve => {setTimeout(resolve, millis)})
}

console.log(sleep)