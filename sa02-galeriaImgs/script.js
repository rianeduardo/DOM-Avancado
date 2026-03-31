// Pegando os elementos do nosso HTML

const uploadInput = document.querySelector("#upload");
const btnEnvia = document.querySelector("#addBtn");
const galeria = document.querySelector("#galeria");
const carrossel = document.querySelector("#carrossel");

// Vetor das imagens

let imagens = [];
btnEnvia.addEventListener("click", () => {
  let imagemUrl = uploadInput.value.trim();

  if (imagemUrl === "") return;
  imagens.push(imagemUrl);
  atualizarGaleria();
  atualizarCarrossel();
  uploadInput.value = "";
  console.log(imagens);
});

// Atualizar Galeria

function atualizarGaleria() {
  galeria.innerHTML = "";
  imagens.forEach((imagem, index) => {
    let div = document.createElement("div");
    div.classList.add("imagemContainer");
    let img = document.createElement("img");
    img.src = imagem;
    let btnRemove = document.createElement("button");
    btnRemove.classList.add("btnRemover");
    let icon = document.createElement("i")
    icon.classList.add("fa-solid")
    icon.classList.add("gap-icon");
    icon.classList.add("fa-trash");
    btnRemove.innerText = "Deletar";
    btnRemove.appendChild(icon)
    btnRemove.addEventListener("click", () => {
      imagens.splice(index, 1);
      atualizarGaleria();
      atualizarCarrossel();
    });
    div.appendChild(img);
    div.appendChild(btnRemove);
    galeria.appendChild(div);
  });
}

// Atualizar Carrossel

function atualizarCarrossel() {
  carrossel.innerHTML = "";

  imagens.forEach((imagem) => {
    let img = document.createElement("img");
    img.src = imagem;
    img.style.height = "600px";
    img.style.width = "100%";
    carrossel.appendChild(img);
  });

  iniciarCarrossel();
}

// Init do carrossel

let intervalo;

function iniciarCarrossel() {
  if (imagens.length === 0) return;

  let index = 0;

  clearInterval(intervalo);

  intervalo = setInterval(() => {
    index = (index + 1) % imagens.length;

    carrossel.style.transition = "transform 0.5s ease-in-out";
    carrossel.style.transform = `translateX(-${index * 100}%)`;
  }, 2000);
}
