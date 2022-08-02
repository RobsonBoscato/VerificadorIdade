function calcular() {
  var img = window.document.getElementById('fotos')
  
  var data = new Date()
  var ano = data.getFullYear()
  var anonasc = window.document.getElementById('nasc')
  var age = ano - Number(anonasc.value)
  
  var gender = window.document.getElementsByName('radsex')
  var genero = ''
  
  if (anonasc.value.length == 0 || anonasc.value >= ano) {
    window.alert('ERRO! Verifique os dados e digite novamente!')
  }

  if (gender[0].checked) {
    genero = 'Homem'
    if (age > 0 && age <= 2 ) {
      msg.innerHTML = `Detectamos um bebê com idade de ${age} anos.`
      img.src = 'images/nenem.jpg'
    } else if (age > 2 && age <= 12) {
        msg.innerHTML = `Detectamos um menino com idade de ${age} anos.`
        img.src = 'images/menino.jpg'
    } else if (age > 12 && age <= 24) {
        msg.innerHTML = `Detectamos um jovem com idade de ${age} anos.`
        img.src = 'images/moço.jpg'
    } else if (age > 24 && age <= 45) {
        msg.innerHTML = `Detectamos um adulto de ${age} anos.`
        img.src = 'images/adulto.jpg'
    } else if (age > 45 && age <= 120) {
        msg.innerHTML = `Detectamos um senhor de ${age} anos.`
        img.src = 'images/senhor.jpg'    
    } else {
        msg.innerHTML = `Detectamos uma pessoa com ${age} anos.`
        img.src = 'images/pexels-chris-j-mitchell-1528375.jpg'
    }
  } else if (gender[1].checked) {
      genero  = 'Mulher'
      if (age > 0 && age <= 2 ) {
        msg.innerHTML = `Detectamos uma bebê com idade de ${age} anos.`
        img.src = 'images/nenem.jpg'
      } else if (age > 2 && age <= 12) {
          msg.innerHTML = `Detectamos uma menina com idade de ${age} anos.`
          img.src = 'images/menina.jpg'
      } else if (age > 12 && age <= 24) {
          msg.innerHTML = `Detectamos uma jovem com idade de ${age} anos.`
          img.src = 'images/moça.jpg'
      } else if (age > 24 && age <= 45) {
          msg.innerHTML = `Detectamos uma adulta de ${age} anos.`
          img.src = 'images/adulta.jpg'
      } else if (age > 45 && age <= 120) {
          msg.innerHTML = `Detectamos uma senhora de ${age} anos.`
          img.src = 'images/senhora.jpg'    
      } else {
          msg.innerHTML = `Detectamos uma pessoa com ${age} anos.`
         img.src = 'images/pexels-chris-j-mitchell-1528375.jpg'
      }
    }

}
    