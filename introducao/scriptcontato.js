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

// Criar o formulário com o DOM

let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form);

let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu Nome";
inputNome.id = "nome";
form.appendChild(inputNome);

let inputEmail = document.createElement("input");
inputEmail.type = "text";
inputEmail.placeholder = "Digite seu Email";
inputEmail.id = "email";
form.appendChild(inputEmail);

let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);

let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);


document.getElementById("formCadastro").addEventListener("submit", (event)=>{
    event.preventDefault();
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    if(nome.value==="" || email.value===""){
        mensagem.innerText = "Preencha Todos os Campos!";
        mensagem.style.color = "red";
    }else{
        mensagem.innerText = "Cadastro Realizado com Sucesso!!!";
        mensagem.style.color = "green";
        nome.value = "";
        email.value = "";
    }
});
