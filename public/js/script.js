
// Função para o temporizador
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;

  var countdownInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdownInterval);
      display.textContent = "Tempo Esgotado";
      alert("Tempo esgotado!");
      
    }
  }, 1000);
}

// Função para iniciar o temporizador
function iniciarTemporizador() {
  var oneMinute = 60; // 1 minuto em segundos
  var display = document.getElementById('timer'); // Elemento HTML onde o tempo será exibido

  display.textContent = "01:00"; // Reinicia o temporizador

  startTimer(oneMinute, display);
}


function validarFormulario() {
  var campoTexto = document.getElementById('name').value.trim();
  var turma = document.getElementById('turma').value.trim();
  var gruposRadio = document.getElementsByClassName('btn-group');

  if (campoTexto === '' || turma === "") {
    alert('Por favor, preencha o seu nome/turma.');
    return false;
  }

  for (var i = 0; i < gruposRadio.length; i++) {
    var radioButtons = gruposRadio[i].querySelectorAll('input[type="radio"]');
    var radioSelecionado = false;

    for (var j = 0; j < radioButtons.length; j++) {
      if (radioButtons[j].checked) {
        radioSelecionado = true;
        break;
      }
    }

    if (!radioSelecionado) {
      alert('Responda todas as questões.');
      return false;
    }
  }

  // Validação passou, enviar para o banco de dados
  // Aqui você pode adicionar o código para enviar as informações para o banco de dados MySQL
  // Exemplo fictício:
  alert('Respostas enviadas para o professor.');

  return true;
}

window.onload = function() {
  const divisoes = document.getElementById('divisoes');

  for (let i = 0; i < 30; i++) {
      // Gera números aleatórios para a divisão
      const divisor = Math.floor(Math.random() * 9) + 1;
      const resultado = Math.floor(Math.random() * 9) + 1;
      const dividendo = divisor * resultado;

      // Cria o elemento da conta
      const conta = document.createElement('p');
      conta.textContent = `${dividendo} ÷ ${divisor} = `;

      // Cria o campo de entrada
      const input = document.createElement('input');
      input.type = 'text';
      input.setAttribute('data-resposta', resultado.toString());

      // Adiciona evento para verificar a resposta
      input.addEventListener('input', function() {
          if (this.value === this.getAttribute('data-resposta')) {
              this.className = 'correto';
          } else {
              this.className = 'incorreto';
          }
      });

      // Adiciona a conta e o campo de entrada no documento
      divisoes.appendChild(conta);
      conta.appendChild(input);
  }
};

function startTimer2(duration, display) {
  var timer2 = duration, minutes, seconds;
  const camposTexto = document.querySelectorAll('input[type="text"]');
  var countdownInterval = setInterval(function () {
    minutes = parseInt(timer2 / 60, 10);
    seconds = parseInt(timer2 % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer2 < 0) {
      clearInterval(countdownInterval);
      display.textContent = "0";
      alert("Tempo esgotado!"),
        camposTexto.forEach(function(campo) {
          campo.disabled = true;
      });
    }
  },1000 );
}

// Função para iniciar o temporizador
function iniciarTemporizador2() {
  var oneMinute = 110; // 3 minuto em segundos
  var display = document.getElementById('timer2'); // Elemento HTML onde o tempo será exibido

  display.textContent = "??:??"; // Reinicia o temporizador

  startTimer2(oneMinute, display);
}

document.addEventListener('DOMContentLoaded', function() {
  const tabela = document.getElementById('tabelaMultiplicacao');
  const contagemDiv = document.getElementById('contagem');
  let pontuacao = 0;

  for (let i = 1; i <= 10; i++) {
      const linha = tabela.insertRow();
      const celulaCabecalho = linha.insertCell();
      celulaCabecalho.textContent = `x${i}`;

      for (let j = 1; j <= 10; j++) {
          const celula = linha.insertCell();
          const input = document.createElement('input');
          input.type = 'text';
          input.dataset.respostaCorreta = i * j;

          input.oninput = function() {
              // Remove as classes para evitar duplicação de pontuação
              if (this.dataset.foiRespondido === 'true') {
                  if (this.value == this.dataset.respostaCorreta) {
                      if (this.className !== 'correto') {
                          pontuacao++; // Correto agora, mas estava incorreto antes
                      }
                  } else {
                      if (this.className === 'correto') {
                          pontuacao--; // Incorreto agora, mas estava correto antes
                      }
                  }
              } else {
                  if (this.value == this.dataset.respostaCorreta) {
                      pontuacao++;
                  } else {
                      pontuacao--;
                  }
                  this.dataset.foiRespondido = 'true';
              }

              this.className = (this.value == this.dataset.respostaCorreta) ? 'correto' : 'incorreto';
              contagemDiv.textContent = `Pontuação: ${pontuacao}`;
          };

          celula.appendChild(input);
      }
  }
});