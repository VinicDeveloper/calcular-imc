function verificar(){
var altura = document.querySelector('input#altura')
var peso  = document.querySelector('input#peso')
var alt = Number(altura.value)
var p = Number(peso.value)
var res = document.querySelector('div#res')
var img = document.createElement('img')
img.setAttribute('id','imagem')

var IMC = p/(alt*alt)


if(IMC <=18.5){
   res.innerHTML =`IMC: ${IMC.toFixed(1)}, CLASSIFICAÇÃO MAGREZA`
   img.setAttribute('src','magreza.jpg')
   res.appendChild(img)
}

else if(IMC > 18.5 && IMC <= 24.9){
  res.innerHTML =`IMC: ${IMC.toFixed(1)}, CLASSIFICAÇÃO SAUDÁVEL`
  img.setAttribute('src','saudavel.jpg')
  res.appendChild(img)
}
else if(IMC > 25 && IMC <= 29.9){
  res.innerHTML =`IMC: ${IMC.toFixed(1)}, CLASSIFICAÇÃO SOBREPESO`
  img.setAttribute('src','sobrepeso.jpg')
   res.appendChild(img)
}
else if(IMC > 30 && IMC <= 34.9){
  res.innerHTML =`IMC: ${IMC.toFixed(1)}, CLASSIFICAÇÃO OBESIDADE GRAU I`
  img.setAttribute('src','obesidade1.jpg')
   res.appendChild(img)
}
else if(IMC > 35 && IMC <= 39.9){
  res.innerHTML =`IMC: ${IMC.toFixed(1)}, CLASSIFICAÇÃO OBESIDADE GRAU II`
  img.setAttribute('src','obesidade2.jpg')
   res.appendChild(img)
}
else if(IMC > 40){
  res.innerHTML =`IMC: ${IMC.toFixed(1)}, CLASSIFICAÇÃO OBESIDADE GRAU III`
  img.setAttribute('src','obesidade3.jpg')
   res.appendChild(img)
   res.appendChild(img).style.display = 'flex'
}
else{
  res.innerHTML =`Digite um valor valido`
}
}
function limpar(){
  var res = document.querySelector('div#res')
  res.innerHTML = ``
  res.appendChild(null)
}