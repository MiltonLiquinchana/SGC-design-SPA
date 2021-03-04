import api from "../helpers/server.js"
export function menuPaginaPrincipal() {
    const btnToggle = document.querySelector('.navbar-toggler'),
     d = document, 
     btnMenu = d.getElementById("items").querySelectorAll('a'),
     wl=window.location;
    btnToggle.addEventListener('click', mostrarMenu);
    btnMenu[1].addEventListener('click', cargarTablaSocios);
    btnMenu[8].addEventListener('click', cargarformRegistroConsumos);
    btnMenu[2].addEventListener('click', mostrarsubreportes);
    btnMenu[6].addEventListener('click', mostrarsubregistro);
    btnMenu[11].addEventListener('click', mostrarsubpagos);
    btnMenu[12].addEventListener('click', cargarformRegistroPagoAgua);
    btnMenu[15].addEventListener('click', mostrarsubconfiguracion);
    /*esta funcion cambia entre clases para el menu principal cuando este en un dispositivo que no sea pc*/
    function mostrarMenu() {//agregamos lo que va a hacer dentro de una funcion cuando den click
        document.getElementById("menu").classList.toggle('mostrar');
    }

    function cargarTablaSocios() {
       //$('#contenido').load("view/tablas/tablaSocios.html", inicioTablaSocios);
        wl.href=(`${api.DOMAIN}#/tablaSocios`);
    }
    function cargarformRegistroConsumos() {
        wl.href=(`${api.DOMAIN}#/formRegistroConsumos`);
        //$('#contenido').load("view/formularios/formRegistroConsumos.html", inicioformRegistroConsumos);
    }
    function cargarformRegistroPagoAgua() {
        wl.href =(`${api.DOMAIN}#/formRegistroPagoAgua`);
        //$('#contenido').load("view/formularios/formRegistroPagoAgua.html", inicioformRegistroPagoAgua);
    }
    function mostrarsubreportes() {
        d.getElementById("dropdownreportes").classList.toggle('dropdow-submenumostrar');
    }
    function mostrarsubregistro() {
        d.getElementById("dropdownregistro").classList.toggle('dropdow-submenumostrar');
    }
    function mostrarsubpagos() {
        d.getElementById("dropdownpagos").classList.toggle('dropdow-submenumostrar');
    }
    function mostrarsubconfiguracion() {
        d.getElementById("dropdownconfiguracion").classList.toggle('dropdow-submenumostrar');
    }
}

