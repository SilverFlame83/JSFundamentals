function numSequence(numOfEl, k) {
    let resultEll = [1];

    for (let i = 1; i < numOfEl; i++) {
        let current = last(resultEll,k);
        resultEll.push(current);
    }
    console.log(resultEll.join(' '));
    
    function last(numOfEl, k) {
        let lastK = numOfEl.slice(-k);
        let sum = 0;
        for (num of lastK) {
            sum += num;
        }
        return sum;
    }
}
numSequence(8, 2);