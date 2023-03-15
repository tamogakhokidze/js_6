"use strict";

let formElement = document.querySelector(".form-block");
let inputField = document.querySelector(".input");
let button = document.querySelector(".btn-add");
let ulItem = document.querySelector(".ul-item");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValueitem = inputField.value;

  if (inputValueitem == " ") {
    return;
  }

  let li = document.createElement("li");
  li.textContent = inputValueitem;

  let span = document.createElement("span");
  span.innerHTML = '<i class ="fa-solid fa-xmark"></i>';
  span.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  ulItem.appendChild(li);

  inputField.value = " ";
});

document.querySelector(".clearall").addEventListener("click", function () {
  ulItem.innerHTML = " ";

});
