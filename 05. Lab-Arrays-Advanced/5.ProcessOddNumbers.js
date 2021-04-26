function oddEll(arr) {
    let filtered = arr.filter(isOdd);
    let mappedFilter = filtered.map(x => x * 2);

    console.log(mappedFilter.reverse());
    

    function isOdd(value, index) {
        return (index % 2 == 1)
    }
}

oddEll([10, 15, 20, 25]);