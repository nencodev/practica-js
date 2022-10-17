const x = 1;
const y = "OK";
const oper = "&&";
console.log("x =", x, " ", "y =", y);
console.log("x", oper, "y");
console.log(Boolean(x), oper, Boolean(y), "devuelve", Boolean(x && y));
console.log(x, oper, y, "devuelve", "(", (x && y), ")");
