var elFrom = document.querySelector(".site-form");
var enterNumber = document.querySelector(".enter-number");

var resultP = document.querySelector(".result");

elFrom.addEventListener("submit", function(evt){
  evt.preventDefault();

  let enterNumberVall = enterNumber.value;
  let array = [];

  array.push(enterNumberVall);

  if (enterNumberVall <= 0){
    resultP.textContent = "0dan katta son kiriting"
  }
  else if(enterNumberVall % 3 == 0 &&  enterNumberVall % 5 == 0) {
    resultP.textContent = "FizzBuzz"
  }
  else if (enterNumberVall % 3 == 0) {
    resultP.textContent = "Fizz"
  }
  else if(enterNumberVall % 5 == 0) {
    resultP.textContent = "Buzz"
  }
  else if(enterNumberVall == ""){
    resultP.textContent = "Siz son kiritmadingiz"
  }
  else {
    resultP.textContent = `Bu son 3 ga va 5 ga bo'linmaydi`
  }
})