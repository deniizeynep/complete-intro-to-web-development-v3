const input = document.querySelector(".color-input");
const paragraph = document.querySelector(".color-box");

input.addEventListener("change", function () {
  paragraph.style.backgroundColor = input.value;
});
