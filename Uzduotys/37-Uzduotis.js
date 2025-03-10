/*Range Extraction
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20" */

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
  });
});

*/


function solution(list) {
    // Check for undefined, null, or non-array inputs
    if (!Array.isArray(list) || list === undefined || list === null) {
        return '';  // Return empty string for invalid inputs
    }

    let newList = [];
    let start = 0;

    for (let i = 0; i < list.length; i++) {
        // Check if the sequence breaks
        if (list[i + 1] !== list[i] + 1) {
            if (i - start >= 2) {
                // Range with three or more consecutive numbers
                newList.push(`${list[start]}-${list[i]}`);
            } else if (i - start === 1) {
                // Two consecutive numbers, add separately
                newList.push(list[start]);
                newList.push(list[i]);
            } else {
                // Single number
                newList.push(list[start]);
            }
            start = i + 1; // Start of the next range
        }
    }

    // Join the list into a string
    return newList.join(',');
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
