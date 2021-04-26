function solve(str) {
    let arr = str.split(' ');

    let occurrences = new Map();

    for (let word of arr) {
        word = word.toLowerCase();
        if (!occurrences.has(word)) {
            occurrences.set(word, 0);
        }
        let newVal = occurrences.get(word) + 1;
        occurrences.set(word, newVal);
    }
    let keys = Array.from(occurrences.keys())
    .filter(x => occurrences.get(x) % 2 !== 0)
    .join(' ');
    console.log(keys);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
function solve(input) {
    let arr = input.split(' ');

    let occurence = {};

    for (let word of arr) {
        word = word.toLowerCase();
        if (!occurence.hasOwnProperty(word)) {
            occurence[word] = 0;
        }
        let newV = occurence[word] + 1;
        occurence[word] = newV;
    }
    let key = Object.keys(occurence)
    .filter (el => occurence[el] % 2!== 0)
    .join(' ');
    console.log(key)

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')