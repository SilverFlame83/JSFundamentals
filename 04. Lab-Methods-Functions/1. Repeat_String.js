function repeatString(str, count){
    let newStr = '';
    for(let i = 0; i < count; i++ ){
        newStr += str;
    }
    return newStr; 
}
repeatString('abc', 3)


