const button = document.querySelector(".event-button");
button.addEventListener("click", function () {
  alert("Hey there!");
});

const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copt-to");

input.addEventListener("keyup", function () {
  paragraph.innerText = input.value;
});
