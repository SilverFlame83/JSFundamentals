function convertedObj(stringObj){
    let parsedObj = JSON.parse(stringObj);

    for(let key of Object.keys(parsedObj)){
        
        console.log(`${key}: ${parsedObj[key]}`)
    
    }
}

let input = '{"name": "George", "age": 40, "town": "Sofia"}'
convertedObj(input);