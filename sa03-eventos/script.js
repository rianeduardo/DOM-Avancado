const botaoDarkMode = document.querySelector("#btnDm")
const iconeBotao = document.querySelector("#iconBtnDm")

botaoDarkMode.addEventListener('click', () => {
  document.body.classList.toggle("dark-mode")
  iconeBotao.classList.toggle("fa-sun")
  iconeBotao.classList.toggle("fa-moon")
})

const form = document.querySelector("#convidadoForm")

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const nomeInput = document.querySelector("#nomeConvidado")
  const sobrenomeInput = document.querySelector("#sobrenomeConvidado")
  const dataNascInput = document.querySelector("#dataNascConvidado")
  const cpfInput = document.querySelector("#cpfConvidado")
  const codeInput = document.querySelector("#codeConvidado")
  const nome = nomeInput.value.trim()

  if (nome === "") return msgAlert("Erro! Nome do convidado não fornecido.")

  const sobrenome = sobrenomeInput.value.trim()

  const dataNasc = dataNascInput.value
  const idade = calcularIdade(dataNasc)
  if (isNaN(idade) || idade < 18) return msgAlert("Erro! Usuário menor de 18 ou data de nascimento inválida.")

  const cpf = cpfInput.value.trim()
  const isCPFValid = validarCPF(cpf)
  if (!isCPFValid) return msgAlert("Erro! CPF inválido ou não fornecido.")

  const code = codeInput.value.trim()
  if (code === "" || code.length !== 6) return msgAlert("Erro! Código errado ou não fornecido.")

  const convidado = {
    nome,
    sobrenome,
    dataNasc,
    cpf,
    code
  }

  const convidadosList = document.querySelector("#convidadosList")
  const listItem = document.createElement("li")
  const btnRemover = document.createElement("button")
  const contador = document.querySelector("#convidadosContador")
  contador.textContent = `Total de convidados: ${convidadosList.children.length + 1}`
  btnRemover.textContent = "Remover"
  btnRemover.classList.add("btnRemover")
  listItem.textContent = `${convidado.nome} ${convidado.sobrenome} - Nasc: ${convidado.dataNasc} - CPF: ${convidado.cpf} - Código: ${convidado.code} - Data de cadastro: ${new Date().toLocaleString()}`
  listItem.appendChild(btnRemover)
  convidadosList.appendChild(listItem)

  btnRemover.addEventListener("click", () => {
    convidadosList.removeChild(listItem)
  })

  nomeInput.value = ""
  sobrenomeInput.value = ""
  dataNascInput.value = ""
  cpfInput.value = ""
  codeInput.value = ""
})

function msgAlert(msg) {
  const alertBox = document.createElement("div")
  alertBox.classList.add("alert-box")
  alertBox.textContent = msg
  document.body.appendChild(alertBox)
  setInterval(() => {
    alertBox.remove()
  }, 5000)
}

function calcularIdade(dataNasc) {
  const hoje = new Date()
  const nascimento = new Date(dataNasc)
  let idade = hoje.getFullYear() - nascimento.getFullYear()
  const mes = hoje.getMonth() - nascimento.getMonth()
  const dia = hoje.getDate() - nascimento.getDate()
  if (mes < 0 || (mes === 0 && dia < 0)) {
    idade--
  }
  return idade
}

window.addEventListener("keydown", (e) => {
  if(e.key === "Escape") {
    const convidadosList = document.querySelector("#convidadosList")
    convidadosList.innerHTML = ""
    const contador = document.querySelector("#convidadosContador")
    contador.textContent = "Total de convidados: 0"
  }
})

function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');

    // Verifica se tem 11 dígitos ou se é uma sequência inválida conhecida
    if (cpf.length !== 11 || 
        cpf === "00000000000" || 
        cpf === "11111111111" || 
        cpf === "22222222222" || 
        cpf === "33333333333" || 
        cpf === "44444444444" || 
        cpf === "55555555555" || 
        cpf === "66666666666" || 
        cpf === "77777777777" || 
        cpf === "88888888888" || 
        cpf === "99999999999") {
        return false;
    }

    // Valida 1º dígito
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Valida 2º dígito
    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

// Exemplo de uso:
// console.log(validarCPF("123.456.789-00")); // false
// console.log(validarCPF("935.411.347-80")); // true