var input  = document.getElementById("input")
var button = document.getElementById("button")
var list   = document.getElementById("list")
button.addEventListener('click', () => {
  var li = document.createElement('li')
  var texto = document.createTextNode(input.value)
  li.appendChild(texto)
  list.appendChild(li)
  input.value = ''
})
list.addEventListener('click', e => {
  list.removeChild(e.target)
})