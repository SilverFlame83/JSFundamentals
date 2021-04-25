function solve(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    let totalSum = 0;

    switch (typeOfTheGroup) {
        case 'Students':

            if (dayOfTheWeek === 'Friday') {
                totalSum = groupOfPeople * 8.45;
            } else if (dayOfTheWeek === 'Saturday') {
                totalSum = groupOfPeople * 9.80;
            } else if (dayOfTheWeek === 'Sunday') {
                totalSum = groupOfPeople * 10.46;
            }
            if (groupOfPeople >= 30) {
                totalSum -= totalSum * 0.15;
            }
            break;
        case 'Business':

            if (dayOfTheWeek === 'Friday') {
                totalSum = groupOfPeople * 10.90;
            } else if (dayOfTheWeek === 'Saturday') {
                totalSum = groupOfPeople * 15.60;
            } else if (dayOfTheWeek === 'Sunday') {
                totalSum = groupOfPeople * 16;
            }
            if (groupOfPeople >= 100) {
                totalSum -= totalSum / 10;
            }
            break;
        case 'Regular':

            if (dayOfTheWeek === 'Friday') {
                totalSum = groupOfPeople * 15;
            } else if (dayOfTheWeek === 'Saturday') {
                totalSum = groupOfPeople * 20;
            } else if (dayOfTheWeek === 'Sunday') {
                totalSum = groupOfPeople * 22.50;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalSum -= totalSum * 0.05;
            }
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`);
    

}
solve(40,
    "Regular",
    "Saturday"
    )