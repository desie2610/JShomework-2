const celsius = prompt("Введіть значення")
const  fahrenheit = celsius * 9/5;
console.log(fahrenheit);

// ==================

const daysInMonth = prompt("Введіть кількість днів")
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth);
console.log(minutesInMonth);

// ==================

const damage = prompt("Введіть кількість домагу");

const health = (100 - damage);
const energy =  (100 - damage - 15);

console.log(damage);
console.log(health);
console.log(energy);

// ==================

const a = prompt("Скільки хочете взяти піц ціна за 1 шт 150грн") * 150;
const b = prompt("Скільки хочете взяти напоїв ціна за 1 шт 25грн") * 25;
const c = prompt("чи бажаєте взяти красиву упаковку так = 1 ні = 0 ціна упаковки 35грн") * 35;
console.log(a);
console.log(b);
console.log(c);
 const totalPrice = a + b + c;
 const promo = prompt("Введіть промокод")
 const discount = totalPrice * 0.9;
 console.log(totalPrice);
 console.log(discount);

//  ==================

const floatNumber = 12.78;
const  roundedDown  = Math.floor(floatNumber);
console.log(roundedDown);

// =============

const floatString = "45.67"; 
const parsedFloat = parseFloat(floatString); 
console.log(typeof(parsedFloat)); 
console.log(parsedFloat);

// ==================
const intString = "123"; 
const parsedInt = parseInt(intString); 
console.log(typeof(parsedInt));
console.log(parsedInt); 

// ==================

const number = 25; 
const sqrtNumber = Math.sqrt(number); 
console.log(sqrtNumber); 

// =================

const integer = 42; 
const stringNumber = "256"; 
const convertedInt = parseInt(stringNumber); 
console.log(convertedInt); 
const convertedString = integer.toString(); 
console.log(convertedString); 


 
 



