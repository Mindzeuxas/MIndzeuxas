/*

Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:

toLeetSpeak("LEET") returns "1337"
In this kata we use a simple LeetSpeak dialect. Use this alphabet:

{
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
}

*/
console.log(toLeetSpeak('LEET'));

function toLeetSpeak(str) {
   
   let leetSimbols = {
    A : '@',
    B : '8',
    C : '(',
    D : 'D',
    E : '3',
    F : 'F',
    G : '6',
    H : '#',
    I : '!',
    J : 'J',
    K : 'K',
    L : '1',
    M : 'M',
    N : 'N',
    O : '0',
    P : 'P',
    Q : 'Q',
    R : 'R',
    S : '$',
    T : '7',
    U : 'U',
    V : 'V',
    W : 'W',
    X : 'X',
    Y : 'Y',
    Z : '2'
   };
   let final = [];
   let array = str.split('');
  //Object.values(leetSimbols); // gaunam desine puse
  // Object.keys(leetSimbols) gauna kaire puse...
   for (let i = 0; i < array.length; i++)
   {
        for (let j = 0; j < Object.keys(leetSimbols).length; j++)
        {
            if (array[i] === Object.keys(leetSimbols)[j])
            {
                final.push(Object.values(leetSimbols)[j]);
                break;
            }
        }
        if (array[i] === ' ')
            final.push(' ');
        
   }
    return final.join('');
  }
