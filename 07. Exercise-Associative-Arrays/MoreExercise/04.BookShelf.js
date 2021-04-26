function solve(input) {
    let shelfInfo = {};

    for (let line of input) {
        if (line.includes('->')) {
            let [shelfId, genre] = line.split(' -> ');
            if (!shelfInfo.hasOwnProperty(shelfId)) {
                shelfInfo[shelfId] = { [genre]: [] };
            }
        } else if (line.includes(':')) {
            let tokens = line.split(', ');
            let authorTitle = tokens[0];
            let bookGenre = tokens[1];
            
            for(let key in shelfInfo) {
                if(shelfInfo[key].hasOwnProperty(bookGenre)){
                    shelfInfo[key][bookGenre].push(authorTitle);
                }
            }
        }
    }
    Object.keys(shelfInfo).sort((a, b) => Object.entries(shelfInfo[b])[0][1].length - Object.entries(shelfInfo[a])[0][1].length)
        .forEach(shelfId => {
            console.log(`${shelfId} ${Object.keys(shelfInfo[shelfId])}: ${Object.values(shelfInfo[shelfId])[0].length}`);
            Object.values(shelfInfo[shelfId]).forEach(values => {
                values.sort((a, b) => a.localeCompare(b)).forEach(v => {
                    console.log(`--> ${v}`);
                });
            });
        });
}

solve(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])