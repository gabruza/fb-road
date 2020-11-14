// 1 - Recuperar o nome do usuario dno sessionStorage
let nome = sessionStorage.getItem("NomeDoUsuario");

// 2 - Escrever o nome do usuário no local devido
let localDoNome = document.querySelector(".avatar-content b");
localDoNome.innerHTML = nome;

// 3 - Carregar as publicações do servidor
async function carregarPublicacoes() {
  let resposta = await fetch("https://foodgram-back.herokuapp.com/posts");
  let fotos = await resposta.json();
  console.log(fotos);
}

carregarPublicacoes();
