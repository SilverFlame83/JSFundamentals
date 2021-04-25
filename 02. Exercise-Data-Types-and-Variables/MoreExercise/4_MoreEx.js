function biggestNum(firstNum, secondNum, thirdNum){
    let maxNum = 0;

    if(firstNum > secondNum && firstNum > thirdNum){
        maxNum = firstNum;
    }else if (secondNum > firstNum && secondNum > thirdNum){
        maxNum = secondNum
    }else if (thirdNum > firstNum && thirdNum > secondNum){
        maxNum = thirdNum
    }
    console.log(maxNum);
    
}
biggestNum(130,
    5,
    99
    )