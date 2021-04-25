function reverse(firstChar, secondChar, thirdChar){
    let result = firstChar + secondChar + thirdChar;
    // result = result.split('').reverse().join(' ');
    // console.log(result);
    
    let reverseChar = '';

    for(let i = result.length - 1; i >= 0; i--){
        
        reverseChar += result[i] + ' ';
    }
    console.log(reverseChar);
    
}
reverse('A',
'B',
'C'
)