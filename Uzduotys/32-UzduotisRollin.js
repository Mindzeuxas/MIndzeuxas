/*Multi-tap Keypad Text Entry on an Old Mobile Phone
Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|  *  | |space| |  #  |
|     | |  0  | |     |
------- ------- -------
Prior to the development of T9 systems (predictive text entry), the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through all its possible values, in order. For example:

Pressing the button 7 repeatedly will cycle through the letters P -> Q -> R -> S -> 7 -> P -> ....
Pressing the button 0 is cycling through SPACE -> 0 -> SPACE -> 0 -> ....
Buttons with a single symbol on it just type this symbol.
A character is "locked in" and inserted into the message once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). For example:

To type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7).
To type in a digit 3, you would press the button 3 four times.
To type in the message "ABC", you would press the button 2 once, wait a second, then press the button 2 twice to enter the letter B, then pause for another second, and press the button 2 three times, to enter the letter C. You would have to press the button 2 six times in total.
In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated...

For this assignment, write code that can calculate the amount of button presses required for any phrase, with the following requirements:

Punctuation can be ignored for this exercise.
Likewise, the phone doesn't distinguish between upper and lowercase characters (but you should allow your module to accept input in either form, for convenience).
Tested phrases contain letters (A-Z and a-z), digits (0-9), and special characters # and *.
*/

/*
assert.strictEqual(presses('LOL'    ),  9);
    assert.strictEqual(presses('HOW R U'), 13);
*/

function presses(phrase) {
    // To do...
    let letters = phrase.toUpperCase().split('');
    let taps = 0;
    let wholeTaps = 0;
    const ones = ['1', 'A', 'D', 'G', 'J', 'M', 'P', 'T', 'W', '*', ' ', '#'];
    const twoes = ['B', 'E', 'H', 'K', 'N', 'Q', 'U', 'X', '0'];
    const threes = ['C', 'F', 'I', 'L', 'O', 'R', 'V', 'Y'];
    const fours = ['2', '3', '4', '5', '6', 'S', '8', 'Z'];
    const fives = ['7', '9'];

    for (let i = 0; i < letters.length; i++) {
        if (ones.includes(letters[i]))
            taps = 1;
        else if (twoes.includes(letters[i]))
            taps = 2;
        else if (threes.includes(letters[i]))
            taps = 3;
        else if (fours.includes(letters[i]))
            taps = 4;
        else if (fives.includes(letters[i]))
            taps = 5;
        wholeTaps += taps;
    }
    return wholeTaps;
  }

  console.log(presses('HOW R U'));
  