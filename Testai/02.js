function multipleOfIndex(arr) {
    return arr.filter((a, b) => a === 0 || a % b === 0);
  }
  console.log(multipleOfIndex([59, 28, -33, 81]));
  
  function findNeedle(haystack) {
    // your code here
    let pos = 0;
    for (let i = 0; i < haystack.length; i++)
    {
        if (haystack[i] === 'needle')
        {
            pos = i;
            break;
        }
       
    }
    if (pos === undefined) return undefined;
    return `found the needle at position ${pos}`;
  }
  let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
  let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
  let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
  let haystack_4 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
  console.log(findNeedle(haystack_1.slice()));
  console.log(findNeedle(haystack_2));
  console.log(findNeedle(haystack_3));
  console.log(findNeedle(haystack_4));
  
  
  
  function pillars(numPill, dist, width) {
    // your code here
    if (numPill < 1)
      return "wrong pillars number";
    if (dist < 10 || dist > 30)
      return 'wrong distance';
    if (width < 10 || width > 50)
      return 'wrong width entered';

    if (numPill === 1)
        return 0;
    
    let pillarWidth = (width / 100) * numPill;
    let distance = (dist * numPill) - dist;
    return Math.round((pillarWidth + distance) * 100 - (2 * width));
    
  }

  console.log(pillars(1, 10, 10)); // 0
  console.log(pillars(2, 20, 25)); // 2000
  console.log(pillars(11, 15, 30)); // 15270


  

  