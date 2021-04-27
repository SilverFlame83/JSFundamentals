function solve(words, str) {
   words = words.split(', ').sort((a,b) => b.length - a.length);

   for (let word of words) {
       let newStr = '*'.repeat(word.length);
       str = str.replace(newStr,word);
   }
   console.log(str)
}

solve('great, learning',
    'softuni is ***** place for ******** new programming languages'

)
// function solve(key, template) {
//    let words = key.split(', ').sort((a,b) => b.length - a.length);
//    words.forEach(word => {
//        template = template.replace('*'.repeat(word.length),word);
//    });
//    console.log(template)
// }

// solve('great, learning',
// 'softuni is ***** place for ******** new programming languages'

// )