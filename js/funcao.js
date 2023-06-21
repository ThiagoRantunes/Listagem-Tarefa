const btn = document.getElementById("btn");
const titulo = document.getElementById("ip1");
const descricao = document.getElementById("ip2");
const data = document.getElementById("ip3");
var contador = 0


btn.addEventListener("click", function(){
    contador = contador + 1;
    if((titulo.value != "") && (titulo.value != null) && (titulo.value != undefined)){
        if((data.value != "") && (data.value != null) && (data.value != undefined)){
            document.getElementById("item").innerHTML += `<div id="${contador}" class="card itens" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${titulo.value}</h5>
              <p class="card-text">${descricao.value}</p>
            </div>
            <div class="end-c">
              <h6>Data: ${data.value}</h6>
              <button class="btn-deletar" onclick="funcaoDeletar(${contador})">Deletar</button>
            </div>
          </div>`
          titulo.value = "";
          descricao.value = "";
          data.value = "";
        }else{
            alert("Insira uma Data!");
        }
    }else{
      alert("Campo vazio!!");
    }
   
});

function funcaoDeletar(del){
    var deletar = document.getElementById(del);
    deletar.remove();
}

const btnexibir = document.getElementById("exibir");
const box = document.getElementById("campo");
box.classList.add("d-none");
var e = true;


btnexibir.addEventListener("click", function(){
  if(e == true){
    box.classList.remove("d-none");
    e = e = false;  
  }else{
    box.classList.add("d-none");
    e = e = true;
  }
  
});