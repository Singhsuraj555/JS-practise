var btn = document.querySelector('button')
var main = document.querySelector('main')

btn.addEventListener('click', ()=> {

    var div = document.createElement('div')

    var x = Math.random()*100
    var y = Math.random()*100
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    div.style.height = '100px'
    div.style.width = '100px'
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
    div.style.position = 'absolute'

    div.style.left = x + '%'
    div.style.top = y + '%'


    
    main.appendChild(div)
})