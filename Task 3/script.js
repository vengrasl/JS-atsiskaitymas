/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const button = document.querySelector('#btn');
console.log(button);

const output = document.querySelector('#output');
console.log(output);

const showAll = document.querySelector('#message');
console.log(showAll)

button.addEventListener('click', (e) => {
  e.preventDefault();
  showAll.classList.add('showNoMore');
  fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        const div = document.createElement('div');
        div.setAttribute('class', 'infoDiv');
        const login = document.createElement('p');
        login.setAttribute('class', 'login');
        login.innerText = `login: ` + item.login;
        div.append(login);
          const avatarURL = document.createElement('img');
          avatarURL.setAttribute('class', 'avatar');
          avatarURL.src = item.avatar_url;
          div.append(avatarURL);
          output.append(div);
      })
    })
})


