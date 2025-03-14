const numbers = [1,2,33,41,5,60,74,87,90,101,"",null,false,NaN];
let evenNumbers = [];
let oddNumbers = [];

for (const number of numbers) {
    if (number) {
        if (number % 2 === 0) {
            evenNumbers = [...evenNumbers, number]
        } else {
            oddNumbers = [...oddNumbers, number]
        }
    } 
};

console.log(`Even numbers: ${evenNumbers}\nOdd numbers: ${oddNumbers}`);

const evenOdd = (numbers) => {
    validNum = numbers.filter(number => number);
    const even = validNum.filter(number => number % 2 === 0);
    const odd = validNum.filter(number => number % 2 !== 0);
    return {even, odd};
};

const {even, odd} = evenOdd(numbers);
console.log(even, odd);