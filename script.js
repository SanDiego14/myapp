let from = document.querySelector("form")
from.onsubmit = submit;

function submit(e) {
  e.preventDefault(); // default is refresh
  // get input
  let input = document.querySelector("input")
  if (input.value === "fred") {
    alert("hi fred");
  } else if (input.value === "george") { 
   alert("hi fred")
  } else {
    alert("who the heck am you");
  }
} 