// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Olá mundo!";

  
// document.querySelector("html").addEventListener("click", function () {
//     alert("Ai! Pare de me cutucar!");
//   });



// function setUserName() {
//     const myName = prompt("Por favor digite o seu nome.");
//     if (!myName) {
//       setUserName();
//     } else {
//       localStorage.setItem("name", myName);
//       myHeading.textContent = `Mozilla é legal, ${myName}`;
//     }
// }
  
// if (!localStorage.getItem("name")) {
//     setUserName();
//     } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mozilla é legal, ${storedName}`;
// }

// myButton.onclick = function() {
//     setUserName();
// }
// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");
// let name = document.querySelector("label");


// function setUser() {
//     const name = name;
//     if (!name) {
//       setUser();
//     } else {
//       localStorage.setItem("name", name);
//       myHeading.textContent = `Mozilla é legal, ${name}`;
//     }
// }

// if (!localStorage.getItem("name")) {
//     setUser();
//     } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mozilla é legal, ${storedName}`;
// }


// myButton.onclick = function() {
//     setUser();
// }



const buttonA = document.querySelector("#button_A");
const buttonC = document.querySelector("#button_C");
const headingA = document.querySelector("#heading_A");
const button_B = document.querySelector("#button_B");
const myHeading = document.querySelector("h1");
// const name = document.querySelector("#name");

// function setUser() {
//     const name = name;
//     if (!name) {
//       setUser();
//     } else {
//       localStorage.setItem("name", name);
//       myHeading.textContent = `Mozilla é legal, ${name}`;
//     }
// }

function setUser() {
    const name = document.getElementById("name").value;
    if (!name) {
    setUser();
    } else {
    localStorage.setItem("name", name);
    myHeading.textContent = `Mozilla é legal, ${name}`;
    }
}

if (!localStorage.getItem("name")) {
    setUser();
    } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storedName}`;
}

button_B.onclick = function() {
    setUser();
}


let count = 1;

buttonA.onclick = () => {
//   buttonA.textContent = "+";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};

buttonC.onclick = () => {
    // buttonC.textContent = "-";
    headingA.textContent = `${count} clicks so far`;
    count -= 1;
  };