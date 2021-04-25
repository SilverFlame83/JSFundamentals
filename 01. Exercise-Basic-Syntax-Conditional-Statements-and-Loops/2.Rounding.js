function solve (number, roundPrecision){
    if(roundPrecision > 15){
        roundPrecision = 15;
    }
    console.log(parseFloat(number.toFixed(roundPrecision)));
    
    
}solve(6.8000000,3)