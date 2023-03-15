"use strict";

//task 2


// დავალება 2:
// დაამატეთ ბურგერის ლოგიკა. ბურგერი უნდა ააწყოთ ან დივებით ან სპანებით. დაჭერის დროს უნდა გამოხნდეს x ვიზუალი და ლამაზად გამოჩნდეს დამალული სანავიგაციო სტრუქტურა. მაგ: https://camex.ge https://www.galleria.ge 



// დავალება 3:
// ააწყეთ ინფუთის მაგილითი, როგორც ვივარჯიშეთ ლექციაზე,
// რასაც ჩავწერ ინფუთში და ღილაკის ან ენთერის დაჭერის შემთვევაში
// ეს მნიშნელობა უნდა ჩავარდეს li-ში, ხოლო ინფუთი უნდა გასუფთავდეს;
//  ლი-ში ჩვენ დავამატეთ წაშლის ღილაკი, ხოლო
//  თქვენ გაალამაზეთ და ღლაკის მაგივრად დაამატეთ აიქონი
//  fontawesome-იდან,
//  რომლის დაჭერის შემთხვევაში წაიშლება მთლიანი ლისტი;

let formElement = document.querySelector(".submitionform");
let inputElement = document.querySelector(".info");
let buttonElement = document.querySelector(".addbutton");
let ulelement = document.querySelector(".clearall");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValueElement = inputElement.value;

  if (inputValueElement == " ") {
    return;
  }

  let li = document.createElement("li");
  li.textContent = inputValueElement;

  let 
});
