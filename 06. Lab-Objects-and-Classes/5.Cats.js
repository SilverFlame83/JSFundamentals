function solve(catsAsStrings) {
    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name},age ${this.age} says Meow`)
        }
    }
    for(let catsAsString of catsAsStrings){
        let [catName,catAge] = catsAsString.split(' ');
        let cat = new Cat(catName,catAge);

        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);