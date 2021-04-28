function solve(input) {
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let regEx = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g;
        let result = regEx.exec(input[i]);
        if (result != null) {
            let name = result.groups.boss;
            let title = result.groups.title;

            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log('Access denied!')
        }
    }
}

solve(["3",
"|PETER|:#H1gh Overseer#",
"|IVAN|:#Master detective#",
"|KARL|: #Marketing lead#"])
