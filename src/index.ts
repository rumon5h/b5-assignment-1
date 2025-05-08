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

