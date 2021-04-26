function solve(input) {
    let mineResult = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty =Number(input[i+1]);

        if(mineResult.hasOwnProperty(resource)) {
            qty += mineResult[resource];
        }

        mineResult[resource] = qty;
        
    }
    for (let [source,qty] of Object.entries(mineResult)) {
        console.log(`${source} -> ${qty}`);
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )