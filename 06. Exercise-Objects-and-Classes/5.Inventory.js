function solve(arr) {
    
    let heros = [];

    while (arr.length > 0) {
        let line = arr.shift().split(' / ');
        let hero = {
            name: line[0],
            level:Number(line[1]),
            items:line[2]
                .split(', ')
                .sort((a,b) => a.localeCompare(b))
                .join(', ')
        }
        heros.push(hero);
    }
    
    heros.sort((hero1,hero2) => {
        return hero1.level- hero2.level;
    });
    let output = [];
    for(const hero of heros){
        let str = `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`;
        output.push(str);
    }
    return output.join('\n')
}

console.log(solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
));