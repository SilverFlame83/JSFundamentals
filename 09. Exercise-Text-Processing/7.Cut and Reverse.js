function solve(str) {

    return [str.substring(0, str.length / 2)
        .split('')
        .reverse()
        .join(''),
        str.substring(str.length/2)
        .split('')
        .reverse()
        .join('')
    ].join('\n')
    // let first = str.substring(0,str.length/2);
    // let second= str.substring(str.length/2,);
    // console.log(first.split('').reverse().join(''));
    // console.log(second.split('').reverse().join(''));

}

console.log(solve('tluciffiDsIsihTgnizamAoSsIsihT'));