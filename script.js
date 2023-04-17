function convertTemp() {
  const fahrenheitInput = document.getElementById("fahrenheit");
  const resultOutput = document.getElementById("result");
  const errorOutput = document.getElementById("error");

  const fahrenheit = fahrenheitInput.value;

  if (fahrenheit === "") {
    errorOutput.innerText = "Please enter a value.";
    errorOutput.style.color = "red";
    resultOutput.innerText = "";
  } else if (isNaN(fahrenheit)) {
    errorOutput.innerText = "Please enter a valid number.";
    errorOutput.style.color = "red";
    resultOutput.innerText = "";
  } else {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    resultOutput.innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    errorOutput.innerText = "";
  }
}
