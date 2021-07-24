const birthDate = document.getElementById("birthDate");
const luckyNumber = document.getElementById("luckyNumber");
const output = document.getElementById("output");

function check() {
  console.log("Clicked");
  console.log(birthDate.value);
  console.log(luckyNumber.value);
  var sum = 0;

  const birth = birthDate.value.split("-").join("");
  console.log(birth);
  for (const i in birth) {
    console.log(birth[i]);
    sum = sum + birth[i];
  }
  if (sum % luckyNumber.value === 0) {
    output.textContent = "yes you are luck ";
  } else {
    output.textContent = "Better Luck next time ";
  }
}
