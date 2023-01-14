const valueInputNode = document.querySelector(".js-value-input");
const currencySelectrorNode = document.querySelector(".js-currency-selection");
const outputNode = document.querySelector(".js-output");

function getInput() {
  return {
    rub: Number(valueInputNode.value),
    currency: currencySelectrorNode.value,
  };
}

function render(result){
  outputNode.innerText = result
}
valueInputNode.addEventListener("input", function () {
  
  const result = convert(getInput());
  render(result)
});

currencySelectrorNode.addEventListener("change", function () {
  
  const result = convert(getInput());
  render(result)
});
