const div1 = document.querySelector('.menu-wrap')
fetch('/navs/menu-wrap.html')
    .then(res => res.text())
    .then(data => {
        div1.innerHTML = data
    })