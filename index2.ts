let discounts: number;
let itemCounts = 11;

if (itemCounts > 0 && itemCounts <= 5) {
    discounts = 5;  // 5% discount
} else if (itemCounts > 5 && itemCounts <= 10) {
    discounts = 10; // 10% discount 
} else {
    discounts = 15; // 15%
}

console.log(`You got ${discounts}% discount. `)


let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else if (itemCount > 10) {
    discount = 15; // 15%
} else {
    discount = 20;//20%
}

console.log(`You got ${discount}% discount. `)