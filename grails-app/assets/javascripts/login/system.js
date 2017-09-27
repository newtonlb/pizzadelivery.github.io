function onCadastroDone(data){
  showMessage(`Bem vindo, ${data.nome}`)
  console.dir(data)
}
function onLoginDone(data){
  showMessage("Login Autorizado");
  console.dir(data);
}
