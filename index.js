var drum = document.querySelectorAll(".drum").length;
// for click
for (let i = 0; i < drum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var clicked = this.innerHTML;
    makeSound(clicked);
    buttonAnimation(this);
  });
  // for key
  document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    var button = document.querySelector("." + event.key);
  if (button) buttonAnimation(button);
  });
  function makeSound(word) {
    switch (word) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/tom-5.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/tom-6.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/tom-7.mp3");
        audio.play();
        break;
    }
  }
  function buttonAnimation(button) {
    button.style.color = "white";
    setTimeout(function () {
      button.style.color = ""; 
    }, 50);
}}

