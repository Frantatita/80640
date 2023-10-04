const fromulario = document.getElementById("boton")
fromulario.addEventListener("click", event=>{
    event.preventDefault();
    let u = document.getElementById("user").value
    let p = document.getElementById("password").value
alert(u+p)
})