let title = "название проекта"; 
let screens = "Простые, Сложные, Интерактивные"; 
let screenPrice = 20;
let rollback = 10;
let fullPrice = 4000;
let adaptive = true;

screens = screens.toLowerCase().split(", ")

console.log(typeof title);
console.log(typeof fullprice);
console.log(typeof adaptive);

console.log(screens.length); 
console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани");
console.log(screens);

console.log((fullPrice * (rollback/100)))
alert("Шалом,господа))");
console.log("Оивээй");