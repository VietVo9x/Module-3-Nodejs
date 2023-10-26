import fs from "fs";
const fileRead = fs.readFileSync("./starter/read-this.txt", "utf8");
const fileInput = fs.readFileSync("./starter/input.txt", "utf8");

fs.writeFileSync("./starter/final.txt", fileRead + "\n" + fileInput);
