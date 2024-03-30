const estadosBrasileiros = ["ACRE", "ALAGOAS", "AMAPÁ", "AMAZONAS", "BAHIA", "CEARÁ", "DISTRITO FEDERAL", "ESPÍRITO SANTO", "GOIÁS", "MARANHÃO", "MATO GROSSO", "MATO GROSSO DO SUL", "MINAS GERAIS", "PARÁ", "PARAÍBA", "PARANÁ", "PERNAMBUCO", "PIAUÍ", "RIO DE JANEIRO", "RIO GRANDE DO NORTE", "RIO GRANDE DO SUL", "RONDÔNIA", "RORAIMA", "SANTA CATARINA", "SÃO PAULO", "SERGIPE", "TOCANTINS"];
const capitaisEstaduais = ["RIO BRANCO", "MACEIÓ", "MACAPÁ", "MANAUS", "SALVADOR", "FORTALEZA", "BRASÍLIA", "VITÓRIA", "GOIÂNIA", "SÃO LUÍS", "CUIABÁ", "CAMPO GRANDE", "BELO HORIZONTE", "BELÉM", "JOÃO PESSOA", "CURITIBA", "RECIFE", "TERESINA", "RIO DE JANEIRO", "NATAL", "PORTO ALEGRE", "PORTO VELHO", "BOA VISTA", "FLORIANÓPOLIS", "SÃO PAULO", "ARACAJU", "PALMAS"];
const siglasEstaduais = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
const regioesEstaduais = ["NORTE", "NORDESTE", "NORTE", "NORTE", "NORDESTE", "NORDESTE", "CENTRO-OESTE", "SUDESTE", "CENTRO-OESTE", "NORDESTE", "CENTRO-OESTE", "CENTRO-OESTE", "SUDESTE", "NORTE", "NORDESTE", "SUL", "NORDESTE", "NORDESTE", "SUDESTE", "NORDESTE", "SUL", "NORTE", "NORTE", "SUL", "SUDESTE", "NORDESTE", "NORTE"];

const estados = document.querySelectorAll('.estado');
const capitais = document.querySelectorAll('.capital');
const siglas = document.querySelectorAll('.sigla');
const regioes = document.querySelectorAll('.regiao');



let inputEstados = [];
let inputCapitais = [];
let inputSiglas = [];
let inputRegioes = [];

let entrou = false;

function verificaResposta(){
    estados.forEach(campo => {
        const valor = campo.value.toUpperCase().replace(/\s/g, '');
        if (valor.trim() !== '') {
            inputEstados.push(valor);
        }
      });

      console.log(inputEstados);

      for(i = 0; i < inputEstados.length; i++){
        console.log(inputEstados[i]);
        if(inputEstados[i] === estadosBrasileiros[i] ){            
           console.log("Entrou");
           entrou = true;
                if(entrou){
                    estados[i].disabled = true;  
                    estados[i].classList.add("correto");
                }
        } else {
            estados[i].classList.add("incorreto");
            console.log("Não Entrou");
        }
      }
      inputEstados = [];
}