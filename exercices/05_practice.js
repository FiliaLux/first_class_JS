const input1 = ["Downloads", "Videos", "capture", "mp4"];
const input2 = ["CodinGame", "python", "py"];
const input3 = ["programming", "languages", "easy", "beginner","useful","pythonstuff","py"];

const concatFunc = (input) => {
    let output = ""
    const inputDot = input.splice(input.length-1, input.length)
        output = input.join("/")
        output += `.${inputDot}`
    return output
};
console.log(concatFunc(input3));

const num1 = 10;
const num2 = 1;
const num3 = 123456;

const splitFunc = (input) => {
    let output = ""
    const strInput = String(input)
    const arrInput = strInput.split("")
    
    output = arrInput.join("-")
    
    return output
};

console.log(splitFunc(num3));

const str1 = "string";
const str2 = "variable";
const str3 = "pointer";

const reverFunc = (input) => {
    let output = ""
    const lenInput = input.length
    const revStr = input.split("").reverse().join("")
    
    output += lenInput + " " + revStr

    return output
};

console.log(reverFunc(str2))