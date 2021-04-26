function palindrome(arr) {
    function reverse(str) {
        let isString = str.toString();
        let reversed = '';
        for (let i = isString.length - 1; i >= 0; i--) {
            reversed += isString.charAt(i);
        }
        return reversed;
    }
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].toString();
        let reverseEl = reverse(arr[i]).toString();
        if (element === reverseEl) {
            console.log('true');

        } else {
            console.log('false');

        }
    }
}
palindrome([32, 2, 232, 1010]);
    // function reverseStr(str) {
    //     let strRev = '';
    //     for (let i = str.length - 1; i >= 0; i--) {
    //         strRev += str.charAt(i);
    //     }
    //     return strRev;
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].toString() === reverseStr(arr[i].toString())) {
    //         console.log('true');

    //     }else{
    //         console.log('false');

    //     }
    // }

    // }
    