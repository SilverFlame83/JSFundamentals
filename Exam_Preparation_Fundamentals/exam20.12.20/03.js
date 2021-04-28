function solve(input) {
    let skill = input.shift();
    let line;
    while ((line = input.shift()) != "For Azeroth") {
        let [command, a, b,c] = line.split(' ');
        if (command === "GladiatorStance") {
            skill = skill.toUpperCase();
            console.log(skill);
        } else if (command === "DefensiveStance") {
            skill = skill.toLowerCase();
            console.log(skill);
        } else if (command === 'Dispel') {
            let index = Number(a);
            if (index >= 0 && index < skill.length) {
                let letter = b;
                let first = skill.substring(0, index);
                let second = skill.substring(index+1);
                skill = first + letter + second;
                console.log('Success!')
            } else {
                console.log('Dispel too weak.')
            }
        } else if(command === 'Target' && a === 'Change'){
            let i = skill.indexOf(b);
            while (i != -1) {
                skill = skill.substring(0, i) + c + skill.substring(i + b.length);
                i = skill.indexOf(b);
            }
            console.log(skill);
        } else if(command ==='Target' && a === 'Remove'){
            let index = skill.indexOf(b);
            let first = skill.substring(0,index);
            let end= skill.substring(index+b.length);
            skill = first + end;
            console.log(skill.trim());
        } else {
            console.log("Command doesn't exist!")
        }
    }
}

solve(["DYN4MICNIC",
"Target Remove NIC",
"Dispel 3 A",
"DefensiveStance",
"Target Change d D",
"target change D d",
"For Azeroth"])



