function productList(arr) {
    let orderTheList = arr.sort();

    for (let i = 0; i < orderTheList.length; i++) {
        console.log(`${i + 1}.${orderTheList[i]}`);
    }
}

productList(["Potatoes", "Tomatoes", "Onions", "Apples"])