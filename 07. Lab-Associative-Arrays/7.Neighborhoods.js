function solve(input) {
    let street = input.shift().split(', ');
    let neighbourhood = {};
    
    for (let str of street) {
        neighbourhood[str] = []; 
    }
    for (let line of input) {
        let [street,name] = line.split(' - ');
        if(neighbourhood.hasOwnProperty(street)){
            neighbourhood[street].push(name);
        }
    }
    let sorted = Object.entries(neighbourhood);
    sorted.sort((a,b) => b[1].length - a[1].length);
    for (let [str,name] of sorted) {
        console.log(`${str}: ${name.length}`);
        if (name.length >= 1) {
            for (let n of name) {
                console.log(`-- ${n}`);
            }
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
);
function solve(arr) {
    let map = new Map();
    let neighborhoods = arr[0].split(', ');
    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i].split(' - ');
        let neighborhood = current[0];
        let person = current[1];
        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);
    for (let [street, person] of sorted) {
        if (person.length !== 0) {
            if (person.length === 1) {
                console.log(`${street}: ${person.length}\n--${person}`);
            } else if (person.length > 1) {
                console.log(`${street}: ${person.length}`)
                for (let i = 0; i < person.length; i++) {
                    console.log(`--${person[i]}`)
                }
            }
        } else if(person.length === 0){
            console.log(`${street}: ${person.length}`)
        }
    }

}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);