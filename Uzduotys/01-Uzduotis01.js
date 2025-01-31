console.log(validBraces(""));

function validBraces(braces)
{
    const arrayOfBraces = [];

    const everyBraces = {
        "(" : { isOpened : true },
        "[" : { isOpened : true },
        "{" : { isOpened : true },
        ")" : { match : "(" },
        "]" : { match : "[" },
        "}" : { match : "{"},

    };

    for (let i = 0; i < braces.split("").length; i++)
    {
        const brace = everyBraces[braces[i]];

        if (brace.isOpened === true)
            arrayOfBraces.push(braces[i]);
        else if (arrayOfBraces.pop() !== brace.match)
            return false;
    }
    return arrayOfBraces.length === 0;
}