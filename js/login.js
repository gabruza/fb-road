function logar() {
  // 1 - Capturar a informação digitada pelo usuário
  let input = document.getElementById("inputNome");
  let nome = input.value;

  // 2 - Salvar essa informação no navegador (sessionStorage)
  sessionStorage.setItem("NomeDoUsuario", nome);

  // 3 - Direcionar o visitante para a página feed.html
  window.location = "feed.html";
}

// a - capturar o botão
let botao = document.getElementById("btnLogin");

// b - associar ao click do botão a execução da função logar
botao.onclick = logar;
