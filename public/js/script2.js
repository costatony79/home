let botaoVerificaResposta = document.getElementById('verificaResposta');
botaoVerificaResposta.addEventListener('click', function() {
        const inputs = document.querySelectorAll('input[type="text"]');
    let estadosBrasileiros = [
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

      inputs.forEach(input => {
        let valorInput = input.value.toUpperCase();
        let encontrado = false;   
        for (let i = 0; i < inputs.length; i++) {
          if (estadosBrasileiros[i] === valorInput) {
            encontrado = true;           
            break;
          }
        }
      
        if (encontrado) {
          console.log(`O valor ${valorInput} está presente no array de comparação.`);
          input.classList.add('correto');
        } else {
          console.log(`O valor ${valorInput} não está presente no array de comparação.`);
          input.classList.add('incorreto');
        }
      });
        console.log('O botão verificaResposta foi clicado!');
        // Aqui você pode chamar uma função ou realizar outras operações desejadas
    });