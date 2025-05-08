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
