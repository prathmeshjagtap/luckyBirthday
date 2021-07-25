const birthDate = document.getElementById("birthDate");
const luckyNumber = document.getElementById("luckyNumber");
const output = document.getElementById("output");
var image = document.getElementById("image");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var sum = 0;
  const birthValue = birthDate.value;
  const luckyValue = luckyNumber.value;

  const birth = birthValue.split("-").join("");
  for (const i in birth) {
    sum = sum + birth[i];
  }
  if (sum % luckyValue === 0) {
    output.textContent = "hooray ! you are a Lucky Person ";
    image.src = "./icons/do-you-even-know-how-lucky-you-are.jpg";
  } else {
    output.textContent = "Oops!!Your birthday is not a lucky number!";
    image.src = "./icons/oh-no-seems-like-you-are-not-that-lucky-today.jpg";
  }
});
