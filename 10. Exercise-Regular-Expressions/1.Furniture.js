function solve(input) {
    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
    let executed = pattern.exec(input);
    let totalPrice = 0;
    let result = 'Bought furniture:\n'

    while(executed != null) {
        let furniture = executed.groups['furniture'];
        let price = Number(executed.groups['price']);
        let quantity = Number(executed.groups['quantity']);

        result += `${furniture}\n`

        totalPrice += price * quantity;

        executed = pattern.exec(input);
    }
    result += `Total money spend: ${totalPrice.toFixed(2)}`
    console.log(result);
}

solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])

//Second Solution
// function solve(input) {
//     let result = 'Bought furniture:\n';
//     let totalPrice = 0;

//     for (let line of input) {
//         let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
//         let executed = pattern.exec(line);

//        if(executed) {
//            result += executed.groups.furniture + '\n'
//            totalPrice += Number(executed.groups.price) * Number(executed.groups.quantity);
//        }
        
//     }
//     result += `Total money spend: ${totalPrice.toFixed(2)}`
//     console.log(result);
// }

// solve(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase'])