function wall(arr) {
    arr.slice(',');
    let firstCrew = Number(arr[0]);
    let secondCrew = Number(arr[1]);
    let thidCrew = Number(arr[2]);
    let sum = 0;
    let result = 0;
    while (firstCrew && secondCrew && thidCrew <= 30) {

        sum = 0;

        if (firstCrew < 30) {
            firstCrew++;
            sum += 195;
        }
        if(secondCrew < 30){
            secondCrew++;
            sum += 195;
        }
        if(thidCrew < 30){
            thidCrew++;
            sum += 195;
        }
        result.push(sum);
    }
    console.log(result.join(', '))
}

wall([21, 25, 28])