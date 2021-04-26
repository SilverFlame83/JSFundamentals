function solve(input) {
    
    for(let line of input){
        let [city,latitude,longitude] = line.split(' | ');
        
        let townObj = {
            city: city,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        } 
        console.log(townObj)
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);