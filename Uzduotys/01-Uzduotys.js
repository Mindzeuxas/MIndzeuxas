console.log(validBraces("({[]})"));

function validBraces(braces){
    //TODO 
    let fullStatus = false;
    let isOpened1 = false;
    let isOpened2 = false;
    let isOpened3 = false;
    let status1 = false, status2 = false,  status3 = false;
    let arrayOfBraces = braces.split("");
    for(let i = 0; i < arrayOfBraces.length; i++)
    {
        
        if ((arrayOfBraces[i] === "\{"|| arrayOfBraces[i] === "\[" || arrayOfBraces[i] === "\(") && !isOpened1 )
          {
            if (arrayOfBraces[i] === "\{")
                status1 = true;
            else if (arrayOfBraces[i] === "\[")
                status2 = true;
            else if (arrayOfBraces[i] === "\(")
                status3 = true;
            isOpened1 = true;
            continue;
          }         
        if ((arrayOfBraces[i] === "\{"|| arrayOfBraces[i] === "\[" || arrayOfBraces[i] === "\(") && isOpened1 && !isOpened2)
          {
            if (arrayOfBraces[i] === "\{")
                status1 = true;
            else if (arrayOfBraces[i] === "\[")
                status2 = true;
            else if (arrayOfBraces[i] === "\(")
                status3 = true;
            isOpened2 = true;
            continue;
          }
        if ((arrayOfBraces[i] === "\{"|| arrayOfBraces[i] === "\[" || arrayOfBraces[i] === "\(") && isOpened1 && isOpened2 )
          {
            if (arrayOfBraces[i] === "\{")
                status1 = true;
            else if (arrayOfBraces[i] === "\[")
                status2 = true;
            else if (arrayOfBraces[i] === "\(")
                status3 = true;
            isOpened3 = true;
            continue;
          }
        if ((arrayOfBraces[i] === "\}"|| arrayOfBraces[i] === "\]" || arrayOfBraces[i] === "\)") && isOpened1 && isOpened2 && isOpened3)
          {
            if (arrayOfBraces[i] === "\}")
                status1 = false;
            else if (arrayOfBraces[i] === "\]")
                status2 = false;
            else if (arrayOfBraces[i] === "\)")
                status3 = false;
            isOpened3 = false;
            fullStatus = true;
            continue;
          }
        if ((arrayOfBraces[i] === "\}"|| arrayOfBraces[i] === "\]" || arrayOfBraces[i] === "\)") && isOpened1 && isOpened2 && !isOpened3)
          {
            if (arrayOfBraces[i] === "\}")
                status1 = false;
            else if (arrayOfBraces[i] === "\]")
                status2 = false;
            else if (arrayOfBraces[i] === "\)")
                status3 = false;
            isOpened2 = false;
            fullStatus = true;
            continue;
          }
        if ((arrayOfBraces[i] === "\}"|| arrayOfBraces[i] === "\]" || arrayOfBraces[i] === "\)") && isOpened1 && !isOpened2 && !isOpened3)
          {
            if (arrayOfBraces[i] === "\}")
                status1 = false;
            else if (arrayOfBraces[i] === "\]")
                status2 = false;
            else if (arrayOfBraces[i] === "\)")
                status3 = false;
            isOpened1 = false;
            fullStatus = true;
            continue;
          }
            
           fullStatus = false;   
          
           
    }
    if (status1 || status2 || status3)
        fullStatus = false;
       
    return fullStatus;  
}

  