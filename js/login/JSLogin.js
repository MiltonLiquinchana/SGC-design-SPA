/* global fetch */
//agregamos un evento al cargar la pagina
let formulario = document.getElementById("formularie"),
 datos; 
window.addEventListener("load", incioLogin);
function incioLogin(e) {
    e.preventDefault();
     datos=new FormData();
    datos.append("accion","IniciarSesion");
    fetch('http://localhost:8080/SistemaGestionComunitariNEW/Controles', {
        method: 'POST',
        mode: 'cors',
        body: datos
    }).then(res=>res.json())
    .catch(error=>console.error("Error:",error))
    .then(response=>{
        if (response.error === 'error') {
            formulario.addEventListener('submit', mostrar);
            console.log(response);
        } else if (response.usuario.length > 0) {
            window.location.href = dir_menuPaginaPrincipal;
        }
    });
}

function mostrar(e) { 
    datos= new FormData(formulario);
    datos.append("accion", "IniciarSesion");
    e.preventDefault();
    fetch('http://localhost:8080/SistemaGestionComunitariNEW/Controles', {
        method: 'POST',
        mode: 'cors',
        body: datos
    }).then(res => res.json())
    .catch(error=>{
        console.log("Error:",error);
    })
        .then(response => {
            console.log(response);
            window.location.href = "view/menus/menuPaginaPrincipal.html";
            document.cookie = "comunidad=" + response.nombre_comuna;
            //data = null;
        });
}
