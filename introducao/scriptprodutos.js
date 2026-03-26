// Criando um header com DOM

let header = document.createElement("header");

// Estilizações

header.style.backgroundColor = "#222";
header.style.padding = "20px 100px";
header.style.height = "8vh";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.Items = "center";
// Reset feito no style.css

// Concatenando o header como elemento filho do body

document.body.appendChild(header);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Criando elementos para add no header

let containerHeader = document.createElement("div");
let divLogo = document.createElement("div");
let divNav = document.createElement("div");
let logo = document.createElement("h1");
logo.innerText = "Logo";
let itensNav = ["Home", "Produtos", "Contato", "Conta"];

// Estilizações

logo.style.color = "red";
divNav.style.display = "flex";
divNav.style.justifyContent = "space-between";
divNav.style.height = "100%";
divNav.style.gap = "20px";
divNav.style.color = "aliceblue";
divNav.style.alignItems = "center";
divNav.style.fontSize = "1rem";
divNav.style.fontWeight = "bold";
containerHeader.style.display = "flex";
containerHeader.style.width = "100%";
containerHeader.style.justifyContent = "space-between";
containerHeader.style.alignItems = "center";

// Concatenando ao header

header.appendChild(containerHeader);
containerHeader.appendChild(divLogo);
divLogo.appendChild(logo);
containerHeader.appendChild(divNav);
itensNav.forEach((e) => {
  let item = document.createElement("a");
  item.innerText = e;
  item.href = e.toLowerCase() + ".html";
  item.style.textDecoration = "none";
  item.style.color = "aliceblue";
  divNav.appendChild(item);
});

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

// Criar eventos avançados com o DOM

// Sugestão de texto

let input = document.createElement("input")
input.type = "text"
input.placeholder = "Buscar..."
input.id = "buscar"

input.style.border = "solid 1px #22222246"
input.style.padding = "10px 20px"
input.style.width = "200px"
input.style.outline = "none"
input.style.borderRadius = "20px"

document.body.appendChild(input)

let lista = document.createElement("ul")
lista.id = "sugestoes"

lista.style.listStyle = "none"

document.body.appendChild(lista)

let sugestoes = [
    "JavaScript", "Ruby on Rails", "Python", "C#", "PHP", "Java", "Kotlin", "Swift", "Rust", "Dart", "Assembly", "Golang", "C++"
]

document.getElementById("buscar").addEventListener("input", (e) => {
    let texto = input.value.toLowerCase()
    lista.innerHTML = ""
    sugestoes.forEach(sugestao => {
        if(sugestao.toLowerCase().includes(texto)) {
            let item = document.createElement("li")
            item.innerText = sugestao;
            item.style.cursor = "pointer"
            item.addEventListener("click", () => {
                input.value = sugestao;
                lista.innerHTML = ""
            })
            lista.appendChild(item)
        }
    })
})