function solve(input) {
    let dungeonsRooms = input.split('|');
    let health = 100;
    let bitcoin = 0;

    for (let i = 0; i < dungeonsRooms.length; i++) {
        let [command, number] = dungeonsRooms[i].split(' ');
        number = Number(number);
        if (command === "potion") {
            if (health < 100) {
                health += number;
                if (health > 100) {
                    let n = health - 100;
                    number -= n;
                    health = 100;
                }
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {
            bitcoin += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i +1}`);
                break;
            }
        }

    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoin}`);
        console.log(`Health: ${health}`);
    }

}

solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' );