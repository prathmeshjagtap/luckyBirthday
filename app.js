const birthDate = document.getElementById("birthDate");
const luckyNumber = document.getElementById("luckyNumber");
const output = document.getElementById("output");
var image = document.getElementById("image");

function check() {
  var sum = 0;

  const birth = birthDate.value.split("-").join("");
  for (const i in birth) {
    sum = sum + birth[i];
  }
  if (sum % luckyNumber.value === 0) {
    output.textContent = "hooray ! you are a Lucky Person ";
    image.src = "./data/do-you-even-know-how-lucky-you-are.jpg";
  } else {
    output.textContent = "Oops!!Your birthday is not a lucky number!";
    image.src = "./data/oh-no-seems-like-you-are-not-that-lucky-today.jpg";
  }
}
