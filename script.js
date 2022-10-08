const nav = document.querySelector('.nav_width')
fetch('/nav_width.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})