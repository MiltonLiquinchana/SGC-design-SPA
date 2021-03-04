import { ajax } from "./helpers/ajax.js";
import { DataTable } from "./helpers/datatables.js";
import { editarEliminar } from "./helpers/EditarEliminarSocio.js";
import api from "./helpers/server.js";
import { modalREComunero } from "./modales/modalREComunero.js";
import { Options } from "./modales/Options.js";
import { tablaSocios } from "./tablas/tablaSocios.js";
import { trtablaSocios } from "./tablas/trtablaSocios.js";
import { GuardarActualizar } from "./helpers/GuardarActualizar.js";
import { formRegistroConsumos } from "./formularios/formRegistroConsumos.js";
import { formRegistroPagoAgua } from "./formularios/formRegistroPagoAgua.js";
import { search_dataPersonConsumos } from "./helpers/search_dataPersonConsumos.js";
import { buscarUltimoConsumo } from "./helpers/buscarUltimoConsumo.js";
import { GuardarConsumo } from "./helpers/GuardarConsumo.js";
import { listarConsumosImpaga } from "./helpers/listarConsumosImpaga.js";
import { buscarDatosConsumoImpaga } from "./helpers/buscarDatosConsumoImpaga.js";
import { guardarDatosPagoConsumo } from "./helpers/guardarDatosPagoConsumo.js";
import { factura } from "./factura/factura.js";
import server from "./helpers/server.js";
import { sweetAlertLoader } from "./components/sweetAlertLoader.js";

/*al poner async a la funciones podemos hacer que digamos al estar procecesando una funcion de consulta
esta trae o se demora demasiado
pero la consulta de mas abajo se proceso mas rapido la consulta que esta mas 
abajo se muestre sin problemas*/
export async function Router() {
    /*esta variable la utilizaremos en todos estos procesos
      esta variable hace referencia al de*/
    let { hash } = location;
    let data = new FormData();
    const d = document;
    // d.querySelector(".loader").style.display = "block";
    switch (hash) {
        case "#/":
            console.log("menu inicio");
            break;
        case "":
            console.log("menu inicio");
            break;
        case "#/tablaSocios":
            data.append("accion", "cargarSocios");
            /*primero traemos los datos de necesarios para llenar la tabla */
            await ajax({
                url: api.SERVERDATE,
                cbSuccess: (comuneros) => {
                    let html = ""; //variable para almacenar el contenido html ya con los datos
                    comuneros.forEach((comunero) => (html += trtablaSocios(comunero))); /*por cada comunero
                    creamos una fila para tabla y la acumulamos en una variable */
                    d.getElementById("contenido").appendChild(tablaSocios(html)); /*ya obtenidos los datos
                    metemos lo tablaen el contenedor de contenidos la tabla recive la acumulacion de html(filas del tbody) las
                    setea */
                    const table = DataTable("#example"); /*cargamos los componentes de jquery datatable */
                    editarEliminar("#example", table); /*agregamos la funcionalidad para llenar el fomrulario
                    //cuando se aga click en el boton editar con los datos del comunero, y eliminar que elimina al comunero*/
                },
                methodr: "POST",
                data: data,
            });
            data = new FormData();
            data.append("accion", "listarTipoUsuarios");
            await ajax({
                url: api.SERVERDATE,
                cbSuccess: (tiposUsuario) => {
                    let html = "";
                    tiposUsuario.forEach((tipo) => (html += Options(tipo)));
                    //console.log(html);
                    d.getElementById("modales").innerHTML = modalREComunero(html);
                    /*ya buscados los datos necesarios agregamos eventos al boton nuevo y al de guardar del formulario
                    el de agregar nuevo limpia y mustra el formulario */
                    const $frmRESocios = d.getElementById("frmRESocios");
                    d.getElementById("btn_Registrarnuevo").addEventListener("click", function () {
                        $frmRESocios.reset();
                        localStorage.setItem("accion", "Guardar");
                        localStorage.setItem("id_comunero", 1);
                        $("#staticBackdrop").modal("show");
                    });
                    /*y agregamos un evento submit el cual ejecutara cogera los datos de accion y id
                    del localestored para saber si tiene que editar o guardar */
                    $frmRESocios.addEventListener("submit", function (e) {
                        e.preventDefault();
                        GuardarActualizar(localStorage.getItem("accion"), $frmRESocios, localStorage.getItem("id_comunero"));
                    });
                },
                methodr: "POST",
                data: data,
            });
            break;
        case "#/formRegistroConsumos":
            data.append("accion", "buscarFechaLimite");
            await ajax({
                url: api.SERVERDATE,
                cbSuccess: (LimiteDias) => {
                    d.getElementById("contenido").appendChild(formRegistroConsumos(LimiteDias));
                    const $btn_search = document.getElementById("btnRC_buscarConsumo"),
                        $frmREConsumo = document.getElementById("frmREConsumo"),
                        $input = $frmREConsumo.querySelectorAll("input"),
                        $select = $frmREConsumo.querySelectorAll("select"),
                        $button = $frmREConsumo.querySelectorAll("button");
                    $btn_search.addEventListener("click", function () {
                        search_dataPersonConsumos($input, $select);
                    });
                    $select[0].addEventListener("change", function () {
                        buscarUltimoConsumo($select, $input);
                    });

                    $button[1].addEventListener("click", function () {
                        //este boton va a eliminar el consumo en caso de algun error
                    });
                    $button[2].addEventListener("click", function () {
                        $select[0].innerHTML = `<option selected disabled>Seleccione un medidor</option>`;
                        $select[1].innerHTML = `<option selected disabled>Selecione un tipo de consumo</option>  `;
                        $frmREConsumo.reset();
                    });
                    $frmREConsumo.addEventListener("submit", function (e) {
                        e.preventDefault();
                        GuardarConsumo($frmREConsumo);
                    });
                },
                methodr: "POST",
                data: data,
            });
            console.log("cargando formRegistroConsumos");
            break;
        case "#/formRegistroPagoAgua":
            d.getElementById("contenido").appendChild(formRegistroPagoAgua());
            const $btn_search = document.getElementById("btnRC_buscarConsumo"),
                $frmREPagoAgua = document.getElementById("frmREPagoAgua"),
                $input = $frmREPagoAgua.querySelectorAll("input"),
                $select = $frmREPagoAgua.querySelectorAll("select"),
                $button = $frmREPagoAgua.querySelectorAll("button");
            $btn_search.addEventListener("click", function () {
                search_dataPersonConsumos($input, $select);
            });
            $select[0].addEventListener("change", function () {
                listarConsumosImpaga($select);
            });
            $select[1].addEventListener("change", function () {
                buscarDatosConsumoImpaga($select, $input);
            });
            $input[17].addEventListener("input", function () {
                let cambio = (parseFloat($input[17].value) - parseFloat($input[16].value)).toFixed(2);
                $input[18].value = cambio;
            });
            $input[17].addEventListener("blur", function () {
                if (parseFloat($input[18].value) < parseFloat($input[16].value));/* mandar un mensage de error
                tambien corregir el problema de cuando no encuentre valores para el consumo */
            });
            $frmREPagoAgua.addEventListener("submit", function (e) {
                e.preventDefault();
                guardarDatosPagoConsumo($frmREPagoAgua);
            });
            $button[1].addEventListener("click", async function () {
                let consumo = document.cookie.replace(/(?:(?:^|.*;\s*)consumo\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                data = new FormData();
                data.append("accion", "buscarDatosFactura");
                data.append("pk_consumo", consumo);
                sweetAlertLoader({
                    title: "Cargando...",
                    text: "Espere mientras se procesa su peticion"
                });
                await ajax({
                    url: server.SERVERDATE,
                    cbSuccess: (factura) => {
                        let numeracion = "0000000",/*1000000 */
                            acumulador = "",
                            contador = 0,
                            lengnumeracion = numeracion.length,
                            lengpk = factura.num_factura.toString().length,
                            resta = lengnumeracion - lengpk;
                        while (resta != contador) {
                            acumulador = acumulador + "0";
                            contador++;
                        }
                        let facturaref = document.getElementById("contenidoFactura").querySelectorAll("input");
                        facturaref[0].value = acumulador + factura.num_factura;
                        facturaref[2].value = factura.primer_apellido + " " + factura.segundo_apellido + " " + factura.primer_nombre + " " + factura.segundo_nombre;
                        let fecha = new Date(),
                            anio, mes, dia;
                        anio = fecha.getFullYear();
                        mes = fecha.getMonth() + 1;
                        dia = fecha.getDate();
                        if (dia < 10) {
                            dia = '0' + dia;
                        } //agrega cero si el menor de 10
                        if (mes < 10) {
                            mes = '0' + mes;
                        } //agrega cero si el menor de 10
                        facturaref[3].value = anio + "-" + mes + "-" + dia;
                        facturaref[4].value = factura.cedula;
                        facturaref[5].value = factura.direccion_vivienda;
                        facturaref[6].value = factura.telefono;
                        facturaref[7].value = factura.numero_medidor;
                        facturaref[8].value = factura.fecha_lectura;
                        facturaref[9].value = factura.fecha_limite_pago;
                        facturaref[10].value = factura.lectura_anterior;
                        facturaref[11].value = factura.lectura_actual;
                        facturaref[12].value = factura.tipo_consumo;
                        facturaref[13].value = factura.consumo_mcubico;
                        facturaref[14].value = factura.tarifa_basicaC;
                        facturaref[15].value = factura.subtotal;
                        facturaref[16].value = factura.tarifa_ambienteC;
                        facturaref[17].value = factura.alcantarilladoC;
                        facturaref[18].value = factura.tipo_multa;
                        facturaref[19].value = factura.dias_retraso;
                        facturaref[20].value = factura.total_multa;
                        facturaref[21].value = factura.totalpagar;
                        facturaref[22].value = factura.totalpagar;
                        facturaref[23].value = factura.deposito;
                        facturaref[24].value = factura.cambio;
                    },
                    methodr: "POST",
                    data: data
                });
                swal.close();
                window.print();
            });
            $button[2].addEventListener("click", function () {
                $select[0].innerHTML = `<option selected disabled value>Seleccione un medidor</option>`;
                $select[1].innerHTML = `<option selected disabled value>Selecione un consumo</option>  `;
                $frmREPagoAgua.reset();
                $button[1].setAttribute("disabled", "");
            });
            if (document.getElementById("contenidoFactura")) {
                console.log("la factura ya existe");
            } else {
                document.getElementById("facturas").appendChild(factura());
            };
            //document.title = "Pago de Agua";//sirve para cambiar el titulo de la pestaña
            break;
    }
    document.querySelector(".loader").style.display = "none";
}
