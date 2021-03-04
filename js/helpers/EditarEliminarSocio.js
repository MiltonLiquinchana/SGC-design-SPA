import { sweetAlertMessagePrincipal } from "../components/sweetAlertMessagePrincipal.js";
import { ajax } from "./ajax.js";
import server from "./server.js";
import { sweetAlertLoader } from "../components/sweetAlertLoader.js";

export function editarEliminar(tbody, table) {
    let data,
        mensageS = "",
        iconS = "",
        textS = "",
        rowData;
    $(tbody).on("click", "a.eliminar", function () {
        rowData = table.row($(this).parents("tr")).data();
        sweetAlertMessagePrincipal({
            showBtn: [true, true],
            sbSucces: async (result) => {
                if (result.isConfirmed) {
                    sweetAlertLoader({
                        title: "Eliminando",
                        text: "Espere mientras se procesa su peticion"
                    });/*en esta peticion no se cierra el alert por que simplemente se tiene que abrir otro y se reemplaza */
                    data = new FormData()
                    data.append("accion", "Eliminar");
                    data.append("pk_comuner", rowData[0]);
                    await ajax({
                        url: server.SERVERDATE,
                        cbSuccess: (mensage) => {
                            if (mensage.message === "Completado") {
                                iconS = "success";
                                textS = "La accion se a completado con exito";
                            } else if (mensage.message === "Error") {
                                iconS = "error";
                                textS = "La accion no se a completado con exito";
                            }
                            mensageS = mensage.message;
                            sweetAlertMessagePrincipal({
                                showBtn: [true, false],
                                sbSucces: () => {
                                    table.row($(this).parents("tr")).remove().draw(false);/*De esta forma eliminamos una fila de un datatable */
                                },
                                colors: ["#3085d6", "#d33"],
                                icon: iconS,
                                title: mensageS,
                                text: textS,
                                textBtn: ["Continuar"],
                                timer: "",
                                allowoutsideclick: false,
                                imageUrl: "",
                                html: ""
                            });
                        },
                        methodr: "POST",
                        data: data
                    });
                }
            },
            colors: ["#3085d6", "#d33"],
            icon: "warning",
            title: "Eliminar",
            text: "¡Esta seguro que decea eliminar a esta persona?",
            textBtn: ["Confirmar", "Cancelar"],
            timer: "",
            allowoutsideclick: false,
            imageUrl: "",
            html: ""
        });
    });

    $(tbody).on("click", "a.editar", async function () {
        sweetAlertLoader({
            title: "Cargando...",
            text: "Espere mientras se cargan los datos"
        });
        rowData = table.row($(this).parents("tr")).data();
        data = new FormData();
        data.append("accion", "editarSocio");
        data.append("id_comunero", rowData[0]);
        /*guardamos la accion actualizar para cuando aga click en submit y el id en el local storage */
        localStorage.setItem("accion", "Actualizar");
        localStorage.setItem("id_comunero", rowData[0]);
        const $frmRESocios = document.getElementById("frmRESocios");
        await ajax({
            url: server.SERVERDATE,
            cbSuccess: (socio) => {
                let { cedula, primer_nombre,
                    segundo_nombre, primer_apellido,
                    segundo_apellido, telefono,
                    direccion_vivienda, referencia_geografica,
                    nombre_comuna, fecha_nacimiento, edad,
                    usuario, contrasenia, pk_tipousuario } = socio,
                    $input = $frmRESocios.querySelectorAll("input"),
                    $select = $frmRESocios.querySelectorAll("select");
                $input[0].value = cedula;
                $input[1].value = primer_nombre;
                $input[2].value = segundo_nombre;
                $input[3].value = primer_apellido;
                $input[4].value = segundo_apellido;
                $input[5].value = telefono;
                $input[6].value = direccion_vivienda;
                $input[7].value = referencia_geografica;
                //$input[8].value = nombre_comuna;/*por que se carga desde la cookie */
                $input[9].value = fecha_nacimiento;
                $input[10].value = edad;
                $input[11].value = usuario;
                $input[12].value = contrasenia;
                $select[0].value = pk_tipousuario;
                $('#staticBackdrop').modal("show");
                swal.close();/*con esto hacemos de cerrar el sweet alert */
            },
            methodr: "POST",
            data: data
        });     
    });
}
