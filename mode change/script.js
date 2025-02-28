// let newbtn =document.createElement("button");
// newbtn.innerText = ("click me ");
// newbtn.style.color = ("white");
// newbtn.style.backgroundColor = ("red");




// let para = document.querySelector("p");


let btn = document.querySelector(".mode-btn");
 
let currmode = "light"; // dark


btn.addEventListener("click", () => {
 if (currmode === "light") {
  currmode = "dark";
  document.querySelector("body").style.backgroundColor = "black";
 } else  {
  
    currmode = "light";
    document.querySelector("body").style.backgroundColor = "white";
 }  
 
console.log(currmode);

});

    