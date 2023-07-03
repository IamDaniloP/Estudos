const num = [1,2,3];
const num2 = [4,5,6];

const num3 = num.concat(num2, [9,10,11], 'cleitinho'); //ou
const num4 = [...num, ...num2];

console.log(num3, typeof num3);
console.log(num4, typeof num4);