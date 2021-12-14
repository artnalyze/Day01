// console.log("Hello World!");

// let first_name: string = "Art";

// console.log(first_name);

// ---- Basic Type ----
// String
// Number
// Boolean
// Array
// Tuple
//  Enum
// Unknown
// Any
// Void
// Null and Undefined
// Naver
// Object
// Type assetions

// String
let say: string = "Hello World";
console.log(say);

// Number
let age: number = 35;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
console.log({ age, decimal, hex, binary });

// Boolean
let isDone: boolean = false;
console.log(isDone);
isDone = true;
console.log(isDone);

// Array
let list: number[] = [1, 2, 3, 4, 5, 6, 77, 7];
let list2: any[] = [1, 3, "aaa", true];
let mylist: Array<number> = [1, 2, 3, 4, 5];
let listCrypto: Array<string> = ["mana", "xrp", "sand", "ada"];

console.log(list);
console.log(list2);
console.log(mylist);
console.log(listCrypto);

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

// Unknow
let notSure: unknown;
notSure = "maybe a string instead";
notSure = 20;
notSure = "john";
console.log(notSure);

// Void
// หากสร้าง function แล้วไม่มีการ return type จะถือเป็น any
function warnUser(fname: string): void {
  console.log(`This is my message ${fname}`);
}

console.log(warnUser("Art"));

// Object
declare function create(obj: object | null): void;

create({})
create(null)

