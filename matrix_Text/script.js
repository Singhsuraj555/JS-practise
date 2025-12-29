const para = document.querySelector('p')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const originalText = para.innerText
let interval = null

para.addEventListener('mouseenter', () => {
  let iteration = 0

  clearInterval(interval)

  interval = setInterval(() => {
    para.innerText = originalText
      .split('')
      .map((char, index) => {
        if (index < iteration) {
          return originalText[index]
        }
        return characters[Math.floor(Math.random() * characters.length)]
      })
      .join('')

    iteration += 0.6

    if (iteration >= originalText.length) {
      clearInterval(interval)
    }
  }, 40)
})


