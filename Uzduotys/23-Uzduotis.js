/*Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

console.log(sortme(["A","about","but","I","On","take","Their","This","This","with","With"]));


function sortme(names){ 
    return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // your code here
  }