let weekDay;
const DATE = Date();
const ARRAYDATE = DATE.split(" ");
console.log(ARRAYDATE);
switch (ARRAYDATE[0]) {
  case "Sun":
    weekDay = "Domingo";
    break;
  case "Mon":
    weekDay = "Lunes";
    break;
  case "Tue":
    weekDay = "Martes";
    break;
  case "Wen":
    weekDay = "Miércoles";
    break;
  case "Thu":
    weekDay = "Jueves";
    break;
  case "Fri":
    weekDay = "Viernes";
    break;
  case "Sat":
    weekDay = "Sábado";
    break;
  default:
    weekDay = "Error: Día inválido";
    break;
};
const DAY = ARRAYDATE[2];
const MONTH = ARRAYDATE[1];
const YEAR = ARRAYDATE[3];
const TIME = ARRAYDATE[4].substring(0, 5);
const COUNTRY = ARRAYDATE[8];

console.log(Date());
console.log("Día:", `${weekDay}`);
console.log("Fecha: ", `${DAY}` + "/" + `${MONTH}` + "/" + `${YEAR}`);
console.log("Hora: ", `${TIME}`, "(" + `${COUNTRY}`);
