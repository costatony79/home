
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

  for (let i = 0; i < 20; i++) {
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


