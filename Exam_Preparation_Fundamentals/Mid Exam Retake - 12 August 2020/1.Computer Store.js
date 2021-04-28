function solve(arr) {
    let discount = 0;
    let partPrice = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] != 'special' && arr[i] != 'regular') {
            let currentPrice = Number(arr[i]);

            if (currentPrice > 0) {
                partPrice += currentPrice;
            } else {
                console.log("Invalid price!")

            }

        }
    }
    let amountOfTaxes = 0.20 * partPrice;
    let totalPrice = amountOfTaxes + partPrice;
    if (arr.pop() === 'special') {
        totalPrice -= totalPrice * 0.10;
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log(
            `Congratulations you've just bought a new computer!
Price without taxes: ${partPrice.toFixed(2)}$
Taxes: ${amountOfTaxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$
        `)
    }
}

solve(
    [
        'regular'
        ]
           
);