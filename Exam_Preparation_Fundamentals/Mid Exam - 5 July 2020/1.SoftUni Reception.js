function softUniRcept(arr) {
    let [firstEmpl, secondEpl, thirdEmpl, totalSt] = arr.map(Number);
    let countForHour = firstEmpl + secondEpl + thirdEmpl;
    let time = 0;

    while(totalSt > 0){
        time ++;
        if(time % 4 !== 0){

            totalSt -= countForHour;
        }

    }
    console.log(`Time needed: ${time}h.`)
}

softUniRcept(['3','2','5','40']);

function secondSolution(arr) {
    let [e1, e2, e3, s] = arr.map(Number);
    let eff = e1 + e2 + e3;
    let timeHour = Math.ceil(s/eff);
    let p = Math.floor((timeHour - 1)/3);
    let totalTime = timeHour + p;
    console.log(`Time needed: ${totalTime}h.`);
    let t0 = Math.ceil(Number(arr.pop())/arr.reduce((p,c) => p + Number(c),0));
    console.log(`Time needed: ${t0 + Math.trunc((t0 - 1)/3)}h.`)
}

secondSolution(['5', '6', '4', '20']);
secondSolution(['1', '2', '3', '45']);
secondSolution(['3', '2', '5', '40']);