import { logger } from "./logs.js";

export function add(n1, n2) {
    logger("add")
    return n1 + n2;
};
export const substract = (n1, n2) => {
    logger("substract");
    return n1 - n2
};

export const multiply = (n1, n2) => {
    logger("multiply");
    return (n1 * n2) * 123;
};
export const division = (n1, n2) => {
    logger("division");
    return n1 / n2;
}