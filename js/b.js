function validBraces(braces){
    //TODO 
    let isOpened1 = false;
    let fullStatus = false;
    let status1 = false;
    let isOpened2 = false;
    let status2 = false;
    let isOpened3 = false;
    let status3 = false;
    let arrayOfBraces = braces.split();
    for(let i = 0; i < arrayOfBraces.length; i++)
      {
        if ((arrayOfBraces[i] === "\{"|| arrayOfBraces[i] === "\[" || arrayOfBraces[i] === "\(") && !isOpened1 )
          {
            isOpened1 = true;
            status1 = true;        
          }         
        if ((arrayOfBraces[i] === "\{"|| arrayOfBraces[i] === "\[" || arrayOfBraces[i] === "\(") && isOpened1 )
          {
            isOpened2 = true;
            status2 = true;
          }
        if ((arrayOfBraces[i] === "\{"|| arrayOfBraces[i] === "\[" || arrayOfBraces[i] === "\(") && isOpened1 && isOpened2 )
          {
            isOpened3 = true;
            status3 = true;
          }
        if ((arrayOfBraces[i] === "\}"|| arrayOfBraces[i] === "\]" || arrayOfBraces[i] === "\)") && isOpened1 && isOpened2 && isOpened3)
          {
            isOpened3 = false;
            status3 = true;
          }
        if ((arrayOfBraces[i] === "\}"|| arrayOfBraces[i] === "\]" || arrayOfBraces[i] === "\)") && isOpened1 && isOpened2 && !isOpened3)
          {
            isOpened2 = false;
            status2 = true;
          }
        if ((arrayOfBraces[i] === "\}"|| arrayOfBraces[i] === "\]" || arrayOfBraces[i] === "\)") && isOpened1 && !isOpened2 && !isOpened3)
          {
            isOpened1 = false;
            status1 = true;
          }
        
        if ((!isOpened1 || !isOpened2 || !isOpened3) && (status1 || status2 || status3))
          {
            fullStatus = true;
          }
         
           
      }
    return fullStatus;  
}
