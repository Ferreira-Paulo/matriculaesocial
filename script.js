function gerar() {
  res.innerHTML = "Comando:"
  
  var m = document.getElementById('matri').value //pega a matricula
  var newStringM = m.replace(/\n/g," "); //retira todos Enter, espaço a mais da matricula (não tira espaço TAB)

  var teste = newStringM.split(" ") //separa cada matricula por espaço
  var filtered_matri = teste.filter(function (el) { //limpa os arrays que estão vazios
    return el != "";
  });
  
  
  var f = document.getElementById('funci').value //pega o cod funcionario
  var newStringF = f.replace(/\n/g," "); //retira todos Enter, espaço a mais da matricula (não tira espaço TAB)

  var teste = newStringF.split(" ") //separa cada cod por espaço
  var filtered_funci = teste.filter(function (el) { //limpa os arrays que estão vazios
    return el != "";
  });
  
  for (i=0;filtered_matri[i] || filtered_funci[i];i++) {
    res.innerHTML += "<br>" + `update funci set matriculaESOCIAL = '${filtered_matri[i]}' where xcodfunc = '${filtered_funci[i]}'`
  }
}