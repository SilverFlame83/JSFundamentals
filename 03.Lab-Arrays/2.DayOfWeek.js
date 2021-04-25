function weekday(num){
    let weekdays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    if(num >= 1 && num <= 7){
        console.log(weekdays[num-1]);
        
    }else {
        console.log('Invalid day!');
        
    }
}
weekday(3);