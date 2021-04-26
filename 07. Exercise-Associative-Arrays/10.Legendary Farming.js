function solve(input) {
    let legendFarm = {};
    let line = input.split(' ');
    let keyMaterials = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath'
    };
    let result = '';
    for (let i = 0; i < line.length; i += 2) {
        let qty = Number(line[i]);
        let material = line[i + 1].toLowerCase();
        if (!legendFarm.hasOwnProperty(material)) {
            legendFarm[material] = 0;
        }
        legendFarm[material] += qty;

        if (legendFarm[material] >= 250 && material in keyMaterials) {
            result +=`${keyMaterials[material]} obtained!\n`;
            legendFarm[material] -= 250;
            break;

        }
    }
    for (let item in keyMaterials) {
        if (!legendFarm.hasOwnProperty(item)) {
            legendFarm[item] = 0;
        }
    }
    const legendaryItemsCollected = Object.entries(legendFarm)
    .filter((item) => hasLegendaryItems(keyMaterials, item[0]))
    .sort((a, b) => sortDescending(a[1], b[1]) || sortAlphabetically(a[0], b[0]))
    .map(formatText)
    .join('\n');
const junkItemsCollected = Object.entries(legendFarm)
    .filter((item) => !hasLegendaryItems(keyMaterials, item[0]))
    .sort((a, b) => sortAlphabetically(a[0], b[0]))
    .map(formatText)
    .join('\n');
result += legendaryItemsCollected + '\n' + junkItemsCollected;

function hasLegendaryItems(items, item) {
    return items.hasOwnProperty(item);
}

function formatText(textArr) {
    return `${textArr[0]}: ${textArr[1]}`;
}

function sortAlphabetically(a, b) {
    return a.localeCompare(b);
}

function sortDescending(a, b) {
    return b - a;
}

return result;
}
console.log(solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'));
    // function farming(str = '') {
    //     let input = str.toLowerCase().split(' ');
    //     let legendary = { fragments: 0, shards: 0, motes: 0 };
    //     let junk = {};
    //     let hasToBreak = false;
    //     while (!hasToBreak && input.length > 0) {
    //         let quantity = +input.shift();
    //         let material = input.shift();
    //         switch (material) {
    //             case 'shards':
    //                 legendary[material] += quantity;
    //                 if (legendary[material] >= 250) {
    //                     console.log(`Shadowmourne obtained!`);
    //                     legendary[material] -= 250;
    //                     hasToBreak = true;
    //                 }
    //                 break;
    //             case 'fragments':
    //                 legendary[material] += quantity;
    //                 if (legendary[material] >= 250) {
    //                     console.log(`Valanyr obtained!`);
    //                     legendary[material] -= 250;
    //                     hasToBreak = true;
    //                 }
    //                 break;
    //             case 'motes':
    //                 legendary[material] += quantity;
    //                 if (legendary[material] >= 250) {
    //                     console.log(`Dragonwrath obtained!`);
    //                     legendary[material] -= 250;
    //                     hasToBreak = true;
    //                 }
    //                 break;
    //             default:
    //                 if (!junk.hasOwnProperty(material)) {
    //                     junk[material] = 0;
    //                 }
    //                 junk[material] += quantity;
    //                 break;
    //         }
    //     }
    //     let legendItems = Object.entries(legendary)
    //         .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    //         .forEach((item) => {
    //             console.log(`${item[0]}: ${item[1]}`);
    //         });

    //     let junkItems = Object.entries(junk)
    //         .sort((a, b) => a[0].localeCompare(b[0]))
    //         .forEach((item) => {
    //             console.log(`${item[0]}: ${item[1]}`);
    //         });
    // }
    // farming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')