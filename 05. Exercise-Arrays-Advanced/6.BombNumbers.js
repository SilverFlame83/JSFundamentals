function bomb(numSequence, bomb) {
    let [specialNum, bombPower] = bomb.splice(' ')

    for (let i = 0; i < numSequence.length; i++) {

        if (numSequence[i] === specialNum) {
            let startDetonation = Math.max(0, i - bombPower);
            let endOfDetonation = bombPower * 2 + 1;
            numSequence.splice(startDetonation, endOfDetonation);
            i = i - bombPower - 1;
        }
    }

    console.log(numSequence.reduce((a, b) => a + b, 0))

}

bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);