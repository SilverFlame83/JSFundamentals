
function solve(input) {
    let occurence = {};

    for(let line of input){
        let word = line
        if(occurence.hasOwnProperty(word)){
            occurence[word] += 1;
        }else{
            occurence[word] = 1;
        }
    }
    let sorted = Object.entries(occurence);
    sorted.sort((a,b) => b[1] -a[1]);
    for(let [word,count] of sorted){
        console.log(`${word} -> ${count}`)
    }
}

solve(["Here", 
"is", "the", "first", "sentence", 
"Here", "is", "another", "sentence", 
"And", "finally", "the", "third", "sentence"])