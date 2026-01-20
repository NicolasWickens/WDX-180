let toggle1 = true;
document.getElementById("title1").addEventListener("click", function () {
  toggle1 = !toggle1;
  let container1 = document.querySelector(".container1");
  let children = container1.children;
  if (toggle1 === false) {
    container1.style.gridTemplateRows = "repeat(10, 100px)";
    exampleCode = document.createElement("div");
    exampleCode.id = "exampleCode1";
	exampleCode.className = "exampleCode";
	exampleCode.style.gridRow = "3 / span 3";
    pre = document.createElement("pre");
    code = document.createElement("code");
    code.className = "language-javascript";
    code.textContent = `// example
var x = 10;
console.log(x); // 10
x = 20;
console.log(x); // 20

// let example
let y = 10;
console.log(y); // 10
y = 20;
console.log(y); // 20

// const example
const z = 10;
console.log(z); // 10
z = 20; // Error: Assignment to constant variable.`;
    Prism.highlightElement(code);
    pre.appendChild(code);
    exampleCode.appendChild(pre);
    container1.insertBefore(exampleCode, children[0]);
  } else {
    container1.style.gridTemplateRows = "repeat(7, 100px)";
    document.getElementById("exampleCode1").remove();
  }
});

let toggle2 = true;
document.getElementById("title2").addEventListener("click", function () {
  toggle2 = !toggle2;
  let container1 = document.querySelector(".container1");
  let children = container1.children;
  if (toggle2 === false) {
	container1.style.gridTemplateRows = "repeat(10, 100px)";
	exampleCode = document.createElement("div");
	exampleCode.id = "exampleCode2";
	exampleCode.className = "exampleCode";
	exampleCode.style.gridRow = "4 / span 3";
	pre = document.createElement("pre");
	code = document.createElement("code");
	code.className = "language-javascript";
	code.textContent = `// example
function varTest() {
var x = 1;
if (true) {
	var x = 2; // same variable!
	console.log(x); // 2
}
console.log(x); // 2
}
varTest();

// let example
function letTest() {
let x = 1;
if (true) {
	let x = 2; // different variable
	console.log(x); // 2
}
console.log(x); // 1
}
letTest();`;
	Prism.highlightElement(code);
	pre.appendChild(code);
	exampleCode.appendChild(pre);
	container1.insertBefore(exampleCode, children[1]);
  }
  else {
	container1.style.gridTemplateRows = "repeat(7, 100px)";
	document.getElementById("exampleCode2").remove();
  }
});

let toggle3 = true;
document.getElementById("title3").addEventListener("click", function () {
  toggle3 = !toggle3;
  let container1 = document.querySelector(".container1");
  let children = container1.children;
  if (toggle3 === false) {
	container1.style.gridTemplateRows = "repeat(10, 100px)";
	exampleCode = document.createElement("div");
	exampleCode.id = "exampleCode3";
	exampleCode.className = "exampleCode";
	exampleCode.style.gridRow = "5 / span 3";
	pre = document.createElement("pre");
	code = document.createElement("code");
	code.className = "language-javascript";
	code.textContent = `// example
function constTest() {
const x = 1;
if (true) {
	const x = 2; // different variable
	console.log(x); // 2
}
console.log(x); // 1
}
constTest();`;
	Prism.highlightElement(code);
	pre.appendChild(code);
	exampleCode.appendChild(pre);
	container1.insertBefore(exampleCode, children[8]);
  }
  else {
	container1.style.gridTemplateRows = "repeat(7, 100px)";
	document.getElementById("exampleCode3").remove();
  }
});

let toggle4 = true;
document.getElementById("title4").addEventListener("click", function () {
  toggle4 = !toggle4;
  let container1 = document.querySelector(".container1");
  let children = container1.children;
  if (toggle4 === false) {
	container1.style.gridTemplateRows = "repeat(10, 100px)";
	exampleCode = document.createElement("div");
	exampleCode.id = "exampleCode4";
	exampleCode.className = "exampleCode";
	exampleCode.style.gridRow = "6 / span 3";
	pre = document.createElement("pre");
	code = document.createElement("code");
	code.className = "language-javascript";
	code.textContent = `// examples
const obj = { a: 1, b: 2 };
console.log(obj); // { a: 1, b: 2 }
obj.a = 10; // Allowed: modifying property
console.log(obj); // { a: 10, b: 2 }
obj = { a: 3, b: 4 }; // Error: Assignment to constant variable.`;
	Prism.highlightElement(code);
	pre.appendChild(code);
	exampleCode.appendChild(pre);
	container1.insertBefore(exampleCode, children[8]);
  }
  else {
	container1.style.gridTemplateRows = "repeat(7, 100px)";
	document.getElementById("exampleCode4").remove();
  }
});

let toggle5 = true;
document.getElementById("title5").addEventListener("click", function () {
  toggle5 = !toggle5;
  let container1 = document.querySelector(".container1");
  let children = container1.children;
  if (toggle5 === false) {
	container1.style.gridTemplateRows = "repeat(10, 100px)";
	exampleCode = document.createElement("div");
	exampleCode.id = "exampleCode5";
	exampleCode.className = "exampleCode";
	exampleCode.style.gridRow = "7 / span 3";
	pre = document.createElement("pre");
	code = document.createElement("code");
	code.className = "language-javascript";
	code.textContent = `// examples
// let: block-scoped, cannot be redeclared in the same scope, can be updated.
let x = 5;
x = 10; // valid
// var: function-scoped, can be redeclared and updated.
var y = 15;
var y = 20; // valid
// const: block-scoped, cannot be redeclared or updated; must be initialized at declaration.
const z = 25;
z = 30; // Error: Assignment to constant variable.
`;
	Prism.highlightElement(code);
	pre.appendChild(code);
	exampleCode.appendChild(pre);
	container1.insertBefore(exampleCode, children[8]);
  }
  else {
	container1.style.gridTemplateRows = "repeat(7, 100px)";
	document.getElementById("exampleCode5").remove();
  }
});

let toggle6 = true;
document.getElementById("title6").addEventListener("click", function () {
  toggle6 = !toggle6;
  let container1 = document.querySelector(".container1");
  let children = container1.children;
  if (toggle6 === false) {
	container1.style.gridTemplateRows = "repeat(10, 100px)";
	exampleCode = document.createElement("div");
	exampleCode.id = "exampleCode6";
	exampleCode.className = "exampleCode";
	exampleCode.style.gridRow = "8 / span 3";
	pre = document.createElement("pre");
	code = document.createElement("code");
	code.className = "language-javascript";
	code.textContent = `// examples
console.log(x);
let x = 10; // ReferenceError: Cannot access 'x' before initialization
console.log(y);
const y = 10; // ReferenceError: Cannot access 'y' before initialization
console.log(z); // 20
var z = 20;
`;
	Prism.highlightElement(code);
	pre.appendChild(code);
	exampleCode.appendChild(pre);
	container1.insertBefore(exampleCode, children[8]);
  }
  else {
	container1.style.gridTemplateRows = "repeat(7, 100px)";
	document.getElementById("exampleCode6").remove();
  }
});