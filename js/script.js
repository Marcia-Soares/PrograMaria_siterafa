document.getElementById ("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario () {
  if(document.getElementById("nome").value != "" &&    document.getElementById("email").value != "" && 
      document.getElementById("telefone").value != ""&&
      document.getElementById("mensagem").value!= "") {
      alert("Prontinho! Agradecemos a mensagem e esperamos interagir o mais breve.")
  } else {
      alert("Por favor, preencher todos os campos solicitados.") 
  }
}

