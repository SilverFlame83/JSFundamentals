function solve(century){
    let year = century * 100;
    let days = Math.trunc(year * 365);
    let hours = days * 24;
    let min = hours * 60;

    console.log(`${century} centuries = ${year} years = ${days} days = ${hours} hours = ${min} minutes`);
    
}
solve(1)