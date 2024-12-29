const valor = document.getElementById("valor");
const form = document.querySelector("form");
const seletor = document.getElementById("seletor-moeda");
const USD = 6.19
const EUR = 6.46
const JPY = 3.92
const ARS = 0.006019 
const CNY = 1.17
const footer = document.querySelector("body footer")
const description = document.getElementById("description")
const result_total = document.getElementById("result-total")

valor.addEventListener("input", () => {
  const textregex = /\D+/g
  
 valor.value = valor.value.replace(textregex, "");

});
form.onsubmit = (event) => {
event.preventDefault();
switch (seletor.value){
  case "USD":
    convert(valor.value, USD, "US$" )
    break
    case"EUR":
    convert(valor.value, EUR, "€")
    break
    case"JPY":
    convert(valor.value, JPY, "¥")
    break
    case"ARS":
    convert(valor.value, ARS, "$")
    break
    case"CNY":
    convert(valor.value, CNY, "¥")
    break
}

};
function convert(valor, price, symbol){
try{
let total = valor * price
total = currencyBRL(total).replace("R$", "")


result_total.textContent = `${total} Reais`
 description.textContent = `${symbol} 1 = ${currencyBRL(price)}`
footer.classList.add("result-footer")
}
catch(erro){
  console.log(erro)
  footer.classList.remove()
alert("não foi possivel converter")
}

} 
  function currencyBRL(value) {
    return Number(value).toLocaleString("pt-br",{
      style: "currency",
      currency: "BRL"

    })
  }
