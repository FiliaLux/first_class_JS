import { calculator } from "./utils.js";
let myCalculator = calculator()
myCalculator.sum(5);
myCalculator.sub(3);
myCalculator.mult(7);
myCalculator.div(2);
console.log(myCalculator.total());