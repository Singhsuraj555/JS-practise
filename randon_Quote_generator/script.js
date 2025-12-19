var btn = document.querySelector('button')
var main = document.querySelector('main')

var arr = ['May the Force be with you.', 'Not all those who wander are lost', 'Be yourself; everyone else is already taken.', 'So many books, so little time.', 'A room without books is like a body without a soul.']

btn.addEventListener('click',() =>{

    var h1 = document.createElement('h1')
    var x = Math.floor(Math.random()*90)
    var y = Math.floor(Math.random()*90)
    var rot = Math.floor(Math.random()*360)
    var scl = Math.random()*3

    var a = Math.floor(Math.random()*arr.length)

    h1.innerHTML = arr[a]
    h1.style.position = 'absolute'
    h1.style.left = x + '%' 
    h1.style.top = y + '%'
    h1.style.rotate = rot + 'deg'
    h1.style.scale = scl
    
    main.appendChild(h1)

})