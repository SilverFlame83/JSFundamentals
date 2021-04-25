function maxNum(arr){
  let maxArr = [];

  for (let i = 0 ; i< arr.length; i++){
      let isMax = true;
      let currentEl = arr[i];
      let rightEl = arr.slice(i + 1);

      for(let j = 0; j < rightEl.length; j++){
          if(currentEl <= rightEl[j]){
              isMax = false;
              break;
          }
      }
    if(isMax){
        maxArr.push(currentEl);
    }
  }
  console.log(maxArr.join(' '));
  
}

maxNum([14, 24, 3, 19, 15, 17])
