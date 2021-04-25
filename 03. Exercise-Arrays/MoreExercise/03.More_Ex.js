function rotateAray(arr) {

    let rotation = Number(arr[arr.length - 1]);
    let newArr = arr.pop();
    if (isNaN(rotation)) {
        console.log('Empty');
    } else {
        for (let i = 0; i < rotation; i++) {
            let lastEl = arr[arr.length - 1];
            arr.splice(0, 0, lastEl)
            arr.pop();
        }
        console.log(arr.join(' '));
    }
}

rotateAray(['remove', 'remove', 'remove']);