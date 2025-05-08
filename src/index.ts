function formatString(input: string, toUpperCase?: boolean){
    if (toUpperCase) {
        return input.toUpperCase();
    }else{
        return input.toLowerCase();
    }
    
}


const res1 = formatString("Hello World", true);
const res2 = formatString("Hello World", false);
const res3 = formatString("Hello World", undefined);

// console.log(formatString("Hello"))
// console.log(res1);
// console.log(res2);
// console.log(res3);


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 3);
}

const arr = [
    { title: "Item 1", rating: 4 },
    { title: "Item 2", rating: 2 },
    { title: "Item 3", rating: 5 },
    { title: "Item 4", rating: 3 },
    { title: "Item 5", rating: 4 },
    { title: "Item 6", rating: 1 },
    { title: "Item 7", rating: 5 },
    { title: "Item 8", rating: 2 },
];
const filteredItemsArr = filterByRating(arr);
// console.log(filteredItemsArr);


function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const concatenatedArr = concatenateArrays(arr1, arr2, arr3);
// console.log(concatenatedArr);

const  arr4 = ["a", "b", "c"];
const arr5 = ["d", "e", "f"];
const concatenatedArr2 = concatenateArrays(arr4, arr5);
// console.log(concatenatedArr2);


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");

// console.log(myCar.getInfo());
// console.log(myCar.getModel());



function processValue(value: string | number): number | string {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
        return value * 2;
    }
    return '';

}


// console.log(processValue('Hello'));
// console.log(processValue(5));

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let mostExpensiveProduct = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensiveProduct.price) {
        mostExpensiveProduct = products[i];
      }
    }
  
    return mostExpensiveProduct;
  }

const products: Product[] = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 15 },
    { name: "Product 4", price: 25 },
    { name: "Product 5", price: 5 }
];

// console.log(getMostExpensiveProduct(products));
// console.log(getMostExpensiveProduct([]));

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday";
    }
  }

// console.log(getDayType(Day.Monday));

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}
// squareAsync(5)
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// squareAsync(-5)
//     .then(result => console.log(result))
//     .catch(error => console.error(error)); 