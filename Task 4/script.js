/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.querySelector('#output');

fetch(ENDPOINT)
  .then(res => res.json())
  .then(data => {
    console.log(data.brand)
    data.forEach(item => {
      const div = document.createElement('div');
      div.setAttribute('class', 'infoDiv');
      const brandName = document.createElement('h1');
      brandName.setAttribute('class', 'brandName');
      brandName.textContent = 'Car brand: ' + item.brand
      console.log(brandName);
      div.append(brandName);
      const modelsName = document.createElement('p');
      modelsName.setAttribute('class', 'modelsName');
      modelsName.textContent = 'Car Models: ' + item.models.join(", ");
      div.append(modelsName);
      output.append(div);
    })
  })