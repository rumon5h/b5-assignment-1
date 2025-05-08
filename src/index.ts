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

 
