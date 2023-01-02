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
      const brandName = document.createElement('h1');
      brandName.setAttribute('class', 'brandName');
      brandName.textContent = item.brand
      console.log(brandName);
      output.append(brandName);
        const modelsName = document.createElement('p');
        modelsName.setAttribute('class', 'modelsName');
        modelsName.textContent = item.models.join(", ");
        output.append(modelsName);
    })
  })