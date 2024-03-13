function classifyFood() {
  const foodName = document.getElementById("foodName").value.toLowerCase();
  let result = "";
  if (
    foodName === "ginger" ||
    foodName === "chilli" ||
    foodName === "black pepper"
  ) {
    result = "Hot";
  } else if (
    foodName === "lemon" ||
    foodName === "watermelon" ||
    foodName === "cucumber"
  ) {
    result = "Cold";
  } else {
    result = "Neutral";
  }
  document.getElementById(
    "result"
  ).innerHTML = `<strong>${foodName}</strong> is ${result} in nature.`;
  document.getElementById("result").className = result.toLowerCase();
}
