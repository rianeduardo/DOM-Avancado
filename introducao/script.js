// Criando um header com DOM

let header = document.createElement("header");

// Estilizações

header.style.backgroundColor = "#222";
header.style.padding = "20px 100px";
header.style.height = "8vh";
header.style.display = "flex"
header.style.justifyContent = "space-between"
header.style.Items = "center"
// Reset feito no style.css

// Concatenando o header como elemento filho do body

document.body.appendChild(header);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Criando elementos para add no header

let containerHeader = document.createElement("div")
let divLogo = document.createElement("div");
let divNav = document.createElement("div");
let logo = document.createElement("h1"); logo.innerText = "Logo"
let itensNav = ["Home", "Produtos", "Contato", "Conta"];

// Estilizações

logo.style.color = "red"
divNav.style.display = "flex";
divNav.style.justifyContent = "space-between";
divNav.style.height = "100%";
divNav.style.gap = "20px"
divNav.style.color = "aliceblue";
divNav.style.alignItems = "center";
divNav.style.fontSize = "1rem";
divNav.style.fontWeight = "bold";
containerHeader.style.display = "flex"
containerHeader.style.width = "100%"
containerHeader.style.justifyContent = "space-between"
containerHeader.style.alignItems = "center"


// Concatenando ao header

header.appendChild(containerHeader)
containerHeader.appendChild(divLogo);
divLogo.appendChild(logo);
containerHeader.appendChild(divNav);
itensNav.forEach((e) => {
  let item = document.createElement("a");
  item.innerText = e;
  item.href = e.toLowerCase() + ".html";
  item.style.textDecoration = "none"
  item.style.color = "aliceblue"
  divNav.appendChild(item);
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Footer

let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.height = "10vh";
footer.style.width = "100%";
footer.style.color = "aliceblue";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.position = "fixed";
footer.style.bottom = "0";
document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.fontSize = "3vh";
divFooter.innerText = "Copyright © 2026 - Todos os direitos reservados.";
footer.appendChild(divFooter);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Clonar elementos

let card = document.createElement("div")
card.classList.add("card")

card.style.width = "120px";
card.style.height = "200px";
card.style.backgroundColor = "#8dc6ff"
card.style.margin = "20px"

let container = document.createElement("div")
container.classList.add("container")

container.style.display = "flex"
container.style.border = "solid 1px #2222223a"
container.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
container.style.borderRadius = "20px"
container.style.margin = "0 auto"
container.style.justifyContent = "space-around"
container.style.width = "90%"
container.style.flexWrap = "wrap"

document.body.appendChild(container)

let btnClone = document.createElement("button")
btnClone.innerText = "Clonar"
btnClone.id = "BtnClonar"

document.body.appendChild(btnClone);
document.body.appendChild(container);
container.appendChild(card);

// Adicionando evento ao botão

document.getElementById("BtnClonar")

btnClone.addEventListener('click', () => {
    let clonar = card.cloneNode(true);
    container.appendChild(clonar)
})

// Criando uma chave de modo claro/escuro
let key = document.createElement("input")
key.type = "checkbox"
key.id = "darkMode"
key.style.position = "fixed"
key.style.top = "10px"
key.style.right = "10px"

document.body.appendChild(key); //add chave ao body

//criando evento para  chave
key.addEventListener("change", () => {
  document.body.classList.toggle("darkMode");
});
