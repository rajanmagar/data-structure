import "./styles.css";

document.getElementById("app").innerHTML = `<h1>Data Structure</h1>
<h2>Stack</h2>
`;

/* Stacks
functions: push, pop, peek, length */

let stack = []; // this is our stack
let word = "racecar";
let rword = "";

// add letters of word into stack
for (let i = 0; i < word.length; i++) {
  stack.push(word[i]);
}
let p = document.createElement("p");
p.innerText = `Stack Length: ${stack.length}`;
let app = document.querySelector("#app");
app.appendChild(p);

// remove the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += stack.pop();
}
let reverse = document.createElement("p");
reverse.innerText = `Reverse Word: ${rword}`;
app.appendChild(reverse);
let result = document.createElement("h3");
rword === word
  ? (result.innerText = `${word} is palindrome.`)
  : (result.innerText = `${word} is not palidrome.`);
app.appendChild(result);
