function solve(input) {

  let line = input.shift();
  let totalPrice = 0;
  while (line != 'end of shift') {
    let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>[A-Za-z]+)>([^\|\$%\.]+)?\|([^\|\$%\.]+)?(?<count>[0-9]+)\|(?<price>([^\|\$%\.]+)?[0-9]+(\.[0-9]+)?)\$/g;
    let executed = pattern.exec(line);
    if (executed != null) {
      let customer = executed.groups['name'];
      let product = executed.groups['product'];
      let count = Number(executed.groups['count']);
      if (isNaN(count)){
        let match = /[0-9]+(\.[0-9]+)?/g;
        let countNum = executed.groups['count'];
        let matched = match.exec(countNum);
        count = Number(matched[0]);
      }
      let price = Number(executed.groups['price']);
      if (isNaN(price)){
        let priceNum = executed.groups['price'];
        let match = /[0-9]+(\.[0-9]+)?/g;
        let matched = match.exec(priceNum);
        price = Number(matched[0]);
      }
      let endPrice = count * price;
      console.log(`${customer}: ${product} - ${endPrice.toFixed(2)}`);
      totalPrice += endPrice
    }
    line = input.shift();
  }
  console.log(`Total income: ${totalPrice.toFixed(2)}`)
}

solve([
  '%George%<Croissant>|valid2|valid10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift'
])