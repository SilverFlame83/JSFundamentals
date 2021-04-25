function binTodec(bstr) {
    binToDec = parseInt((bstr + '').replace(/[^01]/gi,''),2);
    console.log(binToDec);
    // let dec = 0;
    // for (let i = 0; i < bstr.length; i++){
    //     dec *= 2;
    //     dec += + bstr[i];
    // }
    // console.log(dec);
    
}
binTodec('11110000');