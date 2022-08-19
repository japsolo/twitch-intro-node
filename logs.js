import fs from "fs";

export const logger = (fnName) => {
    const date = new Date;
    fs.appendFileSync("./logs.txt", `[${date.toLocaleString()}] - Se ejecutó la función ${fnName}\n`);
}