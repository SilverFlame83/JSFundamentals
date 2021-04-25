function solve(firstString, char, secondString){
    let matchedStr = firstString.replace('_',char);

    matchedStr = matchedStr === secondString? 'Matched': 'Not Matched';
    console.log(matchedStr);
    
}
solve('Str_ng', 'I', 'String')