function alienLanguage(str){
    //coding here...
    return str.split(" ").map(a => a.toUpperCase()).map(b => b.slice(0, b.length -1) + b.at(-1).toLowerCase()).join(' ');
    
  }

  console.log(alienLanguage("My name is John" ));//"My NAMe Is JOHn"
//  (alienLanguage("My name is John") , "My NAMe Is JOHn");
 //   Test.assertSimilar(alienLanguage("this is an example") , "THIs Is An EXAMPLe");
  //  Test.assertSimilar(alienLanguage("Hello World") , "HELLo WORLd");
   // Test.assertSimilar(alienLanguage("HELLO WORLD") , "HELLo WORLd");

   function knightVsKing(knightPosition, kingPosition) {
    const [kRow, kCol] = kingPosition;
    const [nRow, nCol] = knightPosition;
    
    // Convert file letters to numeric columns (A=1, B=2, ..., H=8)
    const colToNum = (col) => col.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    const kColNum = colToNum(kCol);
    const nColNum = colToNum(nCol);
  
    // Possible moves for a knight
    const knightMoves = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
  
    // Possible moves for a king
    const kingMoves = [
      [1, 0], [-1, 0], [0, 1], [0, -1],
      [1, 1], [-1, -1], [1, -1], [-1, 1]
    ];
  
    // Check if knight can attack king
    for (let [dx, dy] of knightMoves) {
      if (nRow + dx === kRow && nColNum + dy === kColNum) {
        return "Knight";
      }
    }
  
    // Check if king can attack knight
    for (let [dx, dy] of kingMoves) {
      if (kRow + dx === nRow && kColNum + dy === nColNum) {
        return "King";
      }
    }
  
    return "None";
  }