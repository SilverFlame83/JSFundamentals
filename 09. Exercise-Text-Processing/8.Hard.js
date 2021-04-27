function solve(input) {
    let splited = input.shift().split(' ');
    let arr = input.shift();
    let endResult = [];
    
    for (let line of splited) {
        if(line[0]==='_'){;
            let regex =/_+/g;
            let el = line.match(regex);
            elLength= el[0].length;
            for(let word of arr) {
                let wordLength = word.length;
                if(elLength === wordLength) {
                    endResult.push(word);
                    break;
                }
            }
        } else {
            endResult.push(line);
        }
    }
    console.log(endResult.join(' '));
}

solve([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    [
      'pie',
      'bring',
      'glad',
      'During',
      'amazing',
      'pharmacist',
      'sprained'
    ]
  ])