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
    btnRemove.innerText = "Deletar";
    btnRemove.addEventListener("click", () => {
      imagens.splice(index, 1);
      atualizarGaleria();
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
    img.style.width = "100%";
    img.style.height = "600px"
    carrossel.appendChild(img);
  });
  carrossel.style.width = `${imagens.length * 100}%`;
  iniciarCarrossel();
}

// Init do carrossel

function iniciarCarrossel() {
  let index = 0;
  setInterval(() => {
    index = (index + 1) % imagens.length;
    carrossel.style.transition = `transform ${(1 + imagens.length) / imagens.length}s ease-in-out`;
    carrossel.style.transform = `translateX(-${(index * 100) / imagens.length}%)`;
  }, 2000);
}
