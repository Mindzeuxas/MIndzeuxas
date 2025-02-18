function generate(sk)
{
    let text = "";
    let dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < sk; i++) 
        text += dictionary.charAt(Math.floor(Math.random() * dictionary.length));  
    return text;
}

    // call function random string with length
    console.log(generate(30));
    
    
