function solve(input) {
    let colection = {};
    let line;
    while ((line = input.shift()) != "End") {
        let [command, name, spell] = line.split(' ');
        if (command == 'Enroll') {
            if (colection.hasOwnProperty(name)) {
                console.log(`${name} is already enrolled.`)
            } else {
                colection[name] = [];
            }
        } else if (command == 'Learn') {

            if (colection.hasOwnProperty(name)) {
                let spellN = colection[name];
                if(spellN.includes(spell)) {
                    console.log(`${name} has already learnt ${spell}.`);
                } else{
                    colection[name].push(spell);
                }  
             
            } if (!colection.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`)
            }
            
        } else if (command == 'Unlearn') {
            if (colection.hasOwnProperty(name)) {
                let spellN = colection[name];
                if(spellN.includes(spell)) {
                    spellN.splice(spell, 1)
                } else{
                    console.log(`${name} doesn't know ${spell}.`);
                } 
            
            } else {
                console.log(`${name} doesn't exist.`)
            }
        }
    }
    let sorted = Object.entries(colection);
    sorted.sort(([nameA, spellA], [nameB, spellB]) => spellB.length - spellA.length
        || nameA.localeCompare(nameB));
    console.log('Heroes:')
    let spells = []
    for (let line of sorted) {
        if(line[1].length >= 0){
            for(let skil of line[1]){
                spells.push(skil)
            }
            console.log(`== ${line[0]}: ${spells.join(', ')}`);
        } else {
            console.log(`== ${line[0]}: `);
        }
        
    }
}

solve(["Enroll Stefan",
"Enroll Peter",
"Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn John ItShouldNotWork",
"Unlearn George Dispel",
"Unlearn Stefan ItShouldWork",
"End"])







