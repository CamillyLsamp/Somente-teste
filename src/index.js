/**
 * Using the provided random number generator function implementation,
 * along with the given seed,
 * you should:
 * - Import random and seed from randomNumberGenerator
 * - Use this function value as default: seed(192837465);
 * - Instantiate a Map class
 * - Iterate 9 times, from 0 to 8
 * - On each iteration save the index as a key on the Map instance and as a value call the random function
 * - Iterate through the Map's keys using the "keys" method
 * - For each key, print it's associated value on the Map instance.
 * - Comment randomNumberGenerator.js code
 * - Output:
 *  0.3156106622882362
    0.5513213466665547
    0.3301843000590452
    0.04769233684601204
    0.4450511749319048
    0.8014283726497524
    0.6599671903586568
    0.39207733233979525
    0.9243979984480575
 
  - YOUR CODE:
*/

// index.js

import { seed, random, checkRandomNumber } from "./randomNumberGenerator";

seed(192837465);


const resultMap = new Map();

for (let i = 0; i < 9; i++) {
  resultMap.set(i, random());
}

for (const key of resultMap.keys()) {
  console.log(resultMap.get(key));
}

const output = checkRandomNumber(Array.from(resultMap.values()));

console.log(output.status);

const appDiv = document.getElementById("app");
appDiv.innerHTML = `<pre>${Array.from(resultMap.values()).join("\n")}</pre>`;

