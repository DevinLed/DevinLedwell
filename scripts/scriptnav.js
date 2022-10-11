const nav = document.querySelector('.nav_width')
fetch('/navs/nav_width.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
    })