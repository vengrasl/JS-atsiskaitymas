/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const kgToLb = (kg) => {
  return kg * 2.2046
}

const kgToG = (kg) =>{
  return kg / 0.0010000
}

const kgToOz = (kg) => {
  return kg * 35.274
}

const inputKg = document.querySelector('#search');
const form = document.querySelector('form');
const calculateButton = document.querySelector('#submit-btn');
const output = document.querySelector('#output');
const kgToLbOutput = document.querySelector('.kgToLb');
const kgToGOutput = document.querySelector('.kgToG');
const kgToOzOutput = document.querySelector('.kgToOz');



form.addEventListener('submit', (e) => {
  console.log(e);
  e.preventDefault();
  atsakymasKgToLb = kgToLb(inputKg.value);
  kgToLbOutput.textContent = `${inputKg.value} kg. verčiant į svarus gauname: ` + atsakymasKgToLb + ` svarus.`;
  atsakymaskgToG = kgToG(inputKg.value);
  kgToGOutput.textContent = `${inputKg.value} kg. verčiant į gramus gauname: ` + atsakymaskgToG + ` gramus.`;
  atsakymaskgToOz = kgToOz(inputKg.value);
  kgToOzOutput.textContent = `${inputKg.value} kg. verčiant į unicjas gauname: ` + atsakymaskgToOz + ` uncijas.`;
})