/*Three candidates take part in a TV show.

In order to decide who will take part in the final game and probably become rich, they have to roll the Wheel of Fortune!

The Wheel of Fortune is divided into 20 sections, each with a number from 5 to 100 (only mulitples of 5).

Each candidate can roll the wheel once or twice and sum up the score of each roll. The winner one that is closest to 100 (while still being lower or equal to 100). In case of a tie, the candidate that rolled the wheel first wins.

You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values.

Your solution should return the name of the winner or false if there is no winner (all scored more than 100).

Example:

var c1 = { name: "Bob", scores: [10, 65] };
var c2 = { name: "Bill", scores: [90, 5] };
var c3 = { name: "Charlie", scores: [40, 55] };
winner([c1, c2, c3]); // Returns "Bill"
Please note that inputs may be invalid: in this case, the function should return false.

Potential errors derived from the specifications are:

More or less than three candidates take part in the game.
A candidate did not roll the wheel or rolled it more than twice.
Scores are not valid.
Invalid user entry (no name or no score). */
var c1 = { name: "Bob", scores: [10, 65] };
var c2 = { name: "Bill", scores: [90, 5] };
var c3 = { name: "Charlie", scores: [40, 55] };
//var c4 = {name: "Petras", scores: [97]};
console.log(winner([c1, c2, c3]));

/*function winner(candidates) {
    var winner = "";
    let sumHigh = 0;
    let once = false;
    let sum = 0;
    if (candidates.length > 3 || candidates.length < 3) 
        return false;
    for (let item of candidates)
    {
        candidates[item].scores.length === 1 ? once = true : once = false;
        candidates[item].scores[1] === undefined || once ? sum = candidates[item].scores[0] : sum = candidates[item].scores[0] + candidates[item].scores[1];
            
        if (sum > 100 || sum % 5 !== 0 || sum < 5 || candidates[item].scores[0] < 5 || candidates[item].scores[0] > 100 || candidates[item].scores[1] > 100 || candidates[item].scores[1] < 0 || 
            candidates[item].scores.length > 2 || candidates[item].scores.length < 0 || candidates[item].name === '' || candidates[item].name === undefined)
         candidates[item] = false;
        if (sumHigh < sum  && candidates[item]) 
        {
            sumHigh = sum;
            winner = candidates[item].name;
        }
    } 
    return winner;
  }*/
    function winner(candidates) {
        // Tikrinu ar yra 3 kandidatai
        if (!Array.isArray(candidates) || candidates.length !== 3) return false;
        
        let bestCandidate = null;
        let bestScore = 0;
        
        for (let candidate of candidates) {
          // Tikrinu ar kandidato duomenys teisingi
          if (
            !candidate.name || typeof candidate.name !== 'string' ||
            !Array.isArray(candidate.scores) ||
            candidate.scores.length < 1 || candidate.scores.length  > 2
          ) {
            return false;
          }
          
          // Skaičiuoju sumą
          let sum = candidate.scores.reduce((acc, num) => acc + num, 0);
          
          // Tikrinu ar visi skaičiai galioja (nuo 5 iki 100)
          if (!candidate.scores.every(num => num >= 5 && num <= 100 && num % 5 === 0)) {
            return false;
          }
          
          // Tikrinu ar bendra suma neviršija 100
          if (sum <= 100) {
            // Jei geriausias kandidates
            if (sum > bestScore) {
              bestScore = sum;
              bestCandidate = candidate;
            }
          }
        }
        
        return bestCandidate ? bestCandidate.name : false;
      }