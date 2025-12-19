const users = [
  {
    fullname: "Aarav Sharma",
    image: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profession: "Web Developer",
    description: "Passionate front-end developer skilled in HTML, CSS, JavaScript, and React."
  },
  {
    fullname: "Neha Verma",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Graphic Designer",
    description: "Creative designer specializing in branding, social media creatives, and UI designs."
  },
  {
    fullname: "Rohit Singh",
    image: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Digital Marketer",
    description: "Expert in SEO, social media marketing, and performance-based ad campaigns."
  },
  {
    fullname: "Pooja Mehta",
    image: "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Content Writer",
    description: "Writes engaging blogs, website content, and product descriptions."
  },
  {
    fullname: "Karan Patel",
    image: "https://plus.unsplash.com/premium_photo-1664875849419-3dc59ec24433?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Mobile App Developer",
    description: "Builds high-performance Android and iOS apps using Flutter and React Native."
  }
];

var sum = ''

users.forEach(function(elem){

    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h2>${elem.fullname}</h2>
            <h3>${elem.profession}</h3>
            <h4>${elem.description}</h4>
        </div>`
})

var main = document.querySelector('main')

main.innerHTML = sum