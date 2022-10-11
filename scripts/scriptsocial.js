const ul = document.querySelector('.ul_class2')
fetch('/navs/ul_class2.html')
    .then(res => res.text())
    .then(data => {
        ul.innerHTML = data
    })