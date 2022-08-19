import colors from "colors";

import { add, substract } from "./operations.js";

const result1 = add(4, 6);
console.log(colors.rainbow(result1.toString()));
console.log(colors.rainbow("Lorem ipsum dolor sit amet, consectetur adipiscing"));

const result2 = substract(4, 6);
console.log(result2);