function loadingBar(num) {
    let loadedNum = num / 10;
    let loading = [];
    let load = '%';
    if (loadedNum === 10) {
        for (let i = 0; i < loadedNum; i++) {
            loading.push(load);
        }
        console.log(`${num}% Complete!`);
        console.log(`[${loading.join('')}]`);

    } if (loadedNum < 10) {
        let count = 0;
        for (let i = 0; i < loadedNum; i++) {
            count++;
            loading.push(load);
        }
        for (let i = 10 - count; i > 0; i--) {
            let empty = '.';
            loading.push(empty);
        }
        console.log(`${num}% [${loading.join('')}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);