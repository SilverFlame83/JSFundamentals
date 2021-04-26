function solve(firstArr, secondArr) {
    let shop = {}

    for (let i = 0; i < firstArr.length; i += 2) {
        let el = firstArr[i];
        shop[el] = Number(firstArr[i + 1]);
    }
    for (let i = 0; i < secondArr.length; i += 2) {
        let el = secondArr[i];
        if (!shop.hasOwnProperty(el)) {
            shop[el] = 0;
        }
            shop[el] += Number(secondArr[i + 1]);
    }
    Object.keys(shop).forEach(key => {
        console.log(`${key} -> ${shop[key]}`)
    })
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    
);