const inputEL = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const divEl = document.getElementById("div-el");

btnEl.addEventListener("click", function () {
  const inputValue = inputEL.value;
  if (inputValue) {
    console.log("Input Value:", inputValue);
    render();
    inputEL.value = ""; // Clear the input field after logging
  } else {
  }
});

function render() {
  const inputValue = inputEL.value;
  const meter = inputValue;
  const feet = meter * 3.28084;
  const liters = inputValue;
  const gallons = liters * 0.264172;
  const kilograms = inputValue;
  const pounds = kilograms * 2.20462;

  divEl.innerHTML = `
         <div>
          <h1>Length (Meter/Feet)</h1>
          <p>${inputValue} meters = ${feet.toFixed(
    3,
  )} feet | ${inputValue} feet = ${(inputValue / 3.28084).toFixed(3)}</p>
        </div>
        <div>
          <h1>Volume (Liters/Gallons)</h1>
          <p>${inputValue} Liters = ${gallons.toFixed(
    3,
  )} Liters | ${inputValue} Gallons = ${(inputValue / 0.264172).toFixed(3)}</p>
        </div>
        <div>
          <h1>Mass (Kilograms/Pounds)</h1>
          <p>${inputValue} Kilograms = ${pounds.toFixed(
    3,
  )} Pounds | ${inputValue} Pounds = ${(inputValue / 2.20462).toFixed(3)}</p>
        </div>`;
}
