function solve(text,word){
    let match = text.split(' ');
    let counter = 0;
    for (let w of match){
        if (w === word){
            counter ++;
        }
    }
    console.log(counter);
}
solve (" is This is a word and it is also is a sentence",
"is"
)

//Second Solutions
// function solve (text,word) {
//     console.log(text.split(' ').filter(w => w == word).length);
// }


// function solve(text,word) {
//     let matcher = ` ${word} `;
//     let index = text.indexOf(matcher);
//     let count = 0;

//     while(index != -1) {
//         count ++;
//         index = text.indexOf(matcher,index + 1);
//     }
//     if (text.startsWith(word)){
//         count++;
//     }
//     if(text.endsWith(word)) {
//         count++
//     }
//     console.log(count)
// }

// solve ("This is a word and it also is a sentence",
// "is"
// )