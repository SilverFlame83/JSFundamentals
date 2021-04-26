function solve(input) {
    let el = input.shift().split(', ');
    let strInfo = {};

    for (let line of el) {
        let str = line;
        strInfo[str] = [];
    }
    for (let line of input) {
        let tokens = line.split(' - ');
        let street = tokens[0];
        let name = tokens[1];

        if (strInfo.hasOwnProperty(street)) {

            strInfo[street].push(name);
        }
    }
    let sorted = Object.entries(strInfo);
    sorted.sort((a,b)=> b[1].length - a[1].length);
    for(let [str,name] of sorted){
       
        if(name.length > 0){
            console.log(`${str}: ${name.length}`);
            for(let n of name){
                console.log(`--${n}`)
            }
        } else {
            console.log(`${str}: 0`);
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)


