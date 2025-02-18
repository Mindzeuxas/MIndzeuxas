

/*
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

function rot13(str) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    let array = str.split('');
    let isBig = false;
    let newChar = '';
    let newString = '';
    for (let i = 0; i < array.length; i++)
    {
        if (!abc.includes(str[i]))
            newString = newString.concat(str[i])
        else 
        {
            if (str[i] === str[i].toUpperCase())
                isBig = true;
            else isBig = false;
            newChar = abc.at((abc.indexOf(str[i]) + 13) % 26);   
            if (isBig)
                newChar = newChar.toUpperCase();
            else newChar = newChar.toLowerCase();
            newString = newString.concat(newChar);
        }
    }
    return newString;
}

console.log(rot13("EBG13 rknzcyr."));

