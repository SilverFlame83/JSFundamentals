function solve(dayOfTheWeek, personsAge){
    switch (dayOfTheWeek) {
        case 'Weekday':
            if(personsAge >= 0 && personsAge <= 18){
                console.log('12$');
            }else if(personsAge > 18 && personsAge <= 64){
                console.log('18$');
            }else if(personsAge > 64 && personsAge <= 122){
                console.log('12$');
            }else{
                console.log('Error!'); 
            }
            break;
        case 'Weekend':
            if(personsAge >= 0 && personsAge <= 18){
                console.log('15$');
            }else if(personsAge > 18 && personsAge <= 64){
                console.log('20$');
            }else if(personsAge > 64 && personsAge <= 122){
                console.log('15$');
            }else{
                console.log('Error!'); 
            }
            break;
        case 'Holiday':
            if(personsAge >= 0 && personsAge <= 18){
                console.log('5$');
            }else if(personsAge > 18 && personsAge <= 64){
                console.log('12$');
            }else if(personsAge > 64 && personsAge <= 122){
                console.log('10$');
            }else{
                console.log('Error!'); 
            }
            break;
            
        default:
            console.log('Error!');
            break;
    }
    
}
solve('Holiday', 15)