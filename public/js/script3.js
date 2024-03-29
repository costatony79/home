const respostasCorretas   = [
    "ACRE",
    "RIO BRANCO",
    "AC",
    "NORTE",
    "ALAGOAS",
    "MACEIÓ",
    "AL",
    "NORDESTE",
    "AMAPÁ",
    "MACAPÁ",
    "AP",
    "NORTE",
    "AMAZONAS",
    "MANAUS",
    "AM",
    "NORTE",
    "BAHIA",
    "SALVADOR",
    "BA",
    "NORDESTE",
    "CEARÁ",
    "FORTALEZA",
    "CE",
    "NORDESTE",
    "DISTRITO FEDERAL",
    "BRASÍLIA",
    "DF",
    "CENTRO-OESTE",
    "ESPÍRITO SANTO",
    "VITÓRIA",
    "ES",
    "SUDESTE",
    "GOIÁS",
    "GOIÂNIA",
    "GO",
    "CENTRO-OESTE",
    "MARANHÃO",
    "SÃO LUÍS",
    "MA",
    "NORDESTE",
    "MATO GROSSO",
    "CUIABÁ",
    "MT",
    "CENTRO-OESTE",
    "MATO GROSSO DO SUL",
    "CAMPO GRANDE",
    "MS",
    "CENTRO-OESTE",
    "MINAS GERAIS",
    "BELO HORIZONTE",
    "MG",
    "SUDESTE",
    "PARÁ",
    "BELÉM",
    "PA",
    "NORTE",
    "PARAÍBA",
    "JOÃO PESSOA",
    "PB",
    "NORDESTE",
    "PARANÁ",
    "CURITIBA",
    "PR",
    "SUL",
    "PERNAMBUCO",
    "RECIFE",
    "PE",
    "NORDESTE",
    "PIAUÍ",
    "TERESINA",
    "PI",
    "NORDESTE",
    "RIO DE JANEIRO",
    "RIO DE JANEIRO",
    "RJ",
    "SUDESTE",
    "RIO GRANDE DO NORTE",
    "NATAL",
    "RN",
    "NORDESTE",
    "RIO GRANDE DO SUL",
    "PORTO ALEGRE",
    "RS",
    "SUL",
    "RONDÔNIA",
    "PORTO VELHO",
    "RO",
    "NORTE",
    "RORAIMA",
    "BOA VISTA",
    "RR",
    "NORTE",
    "SANTA CATARINA",
    "FLORIANÓPOLIS",
    "SC",
    "SUL",
    "SÃO PAULO",
    "SÃO PAULO",
    "SP",
    "SUDESTE",
    "SERGIPE",
    "ARACAJU",
    "SE",
    "NORDESTE",
    "TOCANTINS",
    "PALMAS",
    "TO",
    "NORTE",
  ];
  
  // Função que é chamada quando o botão é clicado
function verificarRespostas() {
    // Seleciona todos os campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    
    // Itera sobre cada campo de texto
    camposTexto.forEach(campo => {
        // Obtém o índice do campo de texto atual
        const indice = campo.dataset.indice;
        // Obtém o valor do campo de texto atual
        const valorUsuario = campo.value.toUpperCase().trim();
        // Obtém a resposta correta para o campo de texto atual
        const respostaCorreta = respostasCorretas[0];

        // Verifica se o valor do usuário é igual à resposta correta
        if (valorUsuario === respostaCorreta) {
            // Se for igual, define a cor de fundo como verde e a cor da fonte como branca
            campo.style.backgroundColor = 'green';
            campo.style.color = 'white';
            console.log("Achou");
        } else {
            // Se for diferente, define a cor de fundo como vermelha e a cor da fonte como branca
            campo.style.backgroundColor = 'red';
            campo.style.color = 'white';
            console.log(valorUsuario);
            console.log(respostaCorreta);


        }
    });
}

// Adiciona um ouvinte de evento de clique ao botão "verificaResposta"
document.getElementById('verificaResposta').addEventListener('click', verificarRespostas);