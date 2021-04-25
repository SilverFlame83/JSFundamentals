function solve (charOne, charTwo, charThree){

    let result ='';

    if(typeof charOne === 'string' && typeof charTwo === 'string' && charThree === 'string'){
    result = `${charOne}${charTwo}${charThree}`;
    }else {
        charOne = charOne.toString();
        charTwo = charTwo.toString();
        charThree = charThree.toString();
        result = `${charOne}${charTwo}${charThree}`;
    }
    console.log(result);
    
}
solve('%',
2,
'o'
)