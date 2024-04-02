const estadosBrasileiros = ["ACRE", "ALAGOAS", "AMAPÁ", "AMAZONAS", "BAHIA", "CEARÁ", "DISTRITOFEDERAL", "ESPÍRITOSANTO", "GOIÁS", "MARANHÃO", "MATOGROSSO", "MATOGROSSODOSUL", "MINASGERAIS", "PARÁ", "PARAÍBA", "PARANÁ", "PERNAMBUCO", "PIAUÍ", "RIODEJANEIRO", "RIOGRANDEDONORTE", "RIOGRANDEDOSUL", "RONDÔNIA", "RORAIMA", "SANTACATARINA", "SÃOPAULO", "SERGIPE", "TOCANTINS"];
const capitaisEstaduais = ["RIOBRANCO", "MACEIÓ", "MACAPÁ", "MANAUS", "SALVADOR", "FORTALEZA", "BRASÍLIA", "VITÓRIA", "GOIÂNIA", "SÃOLUÍS", "CUIABÁ", "CAMPOGRANDE", "BELOHORIZONTE", "BELÉM", "JOÃOPESSOA", "CURITIBA", "RECIFE", "TERESINA", "RIODEJANEIRO", "NATAL", "PORTOALEGRE", "PORTOVELHO", "BOAVISTA", "FLORIANÓPOLIS", "SÃOPAULO", "ARACAJU", "PALMAS"];
const siglasEstaduais = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
const regioesEstaduais = ["NORTE", "NORDESTE", "NORTE", "NORTE", "NORDESTE", "NORDESTE", "CENTROOESTE", "SUDESTE", "CENTROOESTE", "NORDESTE", "CENTROOESTE", "CENTROOESTE", "SUDESTE", "NORTE", "NORDESTE", "SUL", "NORDESTE", "NORDESTE", "SUDESTE", "NORDESTE", "SUL", "NORTE", "NORTE", "SUL", "SUDESTE", "NORDESTE", "NORTE"];

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
      capitais.forEach(campo => {
        const valor = campo.value.toUpperCase().replace(/\s/g, '');
        if (valor.trim() !== '') {
            inputCapitais.push(valor);
        }
      });

      console.log(inputCapitais);

      for(i = 0; i < inputCapitais.length; i++){
        console.log(inputCapitais[i]);
        if(inputCapitais[i] === capitaisEstaduais[i] ){            
           console.log("Entrou");
           entrou = true;
                if(entrou){
                    capitais[i].disabled = true;  
                    capitais[i].classList.add("correto");
                }
        } else {
            capitais[i].classList.add("incorreto");
            console.log("Não Entrou");
        }
      }
      inputCapitais = [];
      siglas.forEach(campo => {
        const valor = campo.value.toUpperCase().replace(/\s/g, '');
        if (valor.trim() !== '') {
            inputSiglas.push(valor);
        }
      });

      console.log(inputSiglas);

      for(i = 0; i < inputSiglas.length; i++){
        console.log(inputSiglas[i]);
        if(inputSiglas[i] === siglasEstaduais[i] ){            
           console.log("Entrou");
           entrou = true;
                if(entrou){
                    siglas[i].disabled = true;  
                    siglas[i].classList.add("correto");
                }
        } else {
            siglas[i].classList.add("incorreto");
            console.log("Não Entrou");
        }
      }
      inputSiglas = [];
      regioes.forEach(campo => {
        const valor = campo.value.toUpperCase().replace(/\s/g, '');
        if (valor.trim() !== '') {
            inputRegioes.push(valor);
        }
      });

      console.log(inputRegioes);

      for(i = 0; i < inputRegioes.length; i++){
        console.log(inputRegioes[i]);
        if(inputRegioes[i] === regioesEstaduais[i] ){            
           console.log("Entrou");
           entrou = true;
                if(entrou){
                    regioes[i].disabled = true;  
                    regioes[i].classList.add("correto");
                }
        } else {
            regioes[i].classList.add("incorreto");
            console.log("Não Entrou");
        }
      }
      inputRegioes = [];
}