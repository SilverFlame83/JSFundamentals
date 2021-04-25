function townInfo (townName, population, area){

    let result = '';
    
    if(typeof townName === 'string' && 
    typeof population === 'number' &&
    typeof area === 'number'){
    result = `Town ${townName} has population of ${population} and area ${area} square km.`;
    }else {
        townName = townName.toString();
        population = Number(population);
        area = Number(area);
        if(isNaN(population) || isNaN(area)){
            result = 'Invalid input'
        }else{
            result = `Town ${townName} has population of ${population} and area ${area} square km.`;
        }
    }
    console.log(result);
    
}
townInfo('Sofia',
1286383,
492
)