function solve(input) {
    let chessBoardSize = Number(input);
    let firstColour = "black";
    let nextColour = "";
    console.log('<div class="chessboard">');

    for(let row = 1; row <= chessBoardSize; row++){
        console.log('  <div>');
        for (let column = 1; column <= chessBoardSize; column++){
            console.log(`    <span class="${firstColour}"></span>`);
            nextColour = firstColour;
            firstColour = nextColour === 'black'? 'white' : 'black';
        }
        console.log('  </div>');
        if (chessBoardSize % 2 === 0){
            nextColour = firstColour;
            firstColour = nextColour === 'black'? 'white' : 'black';
        }
    }
console.log('</div>');
    
}

solve(2)