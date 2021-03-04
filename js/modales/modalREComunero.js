
export function modalREComunero(html){
    let comunidad = document.cookie.replace(/(?:(?:^|.*;\s*)comunidad\s*\=\s*([^;]*).*$)|^.*$/, "$1");
   return `
   <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">

    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Registro de socios</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="frmRESocios">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Cedula:</label>
                        <input class="form-control form-control-sm" type="text" placeholder="Ingrese la cedula" required
                            name="cedula">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Primer nombre:</label>
                        <input class="form-control form-control-sm" type="text" placeholder="Ingrese el primer nombre"
                            required name="pNombre">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Segudo nombre:</label>
                        <input class="form-control form-control-sm" type="text" placeholder="Ingrese el segundo nombre"
                            required name="sNombre">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Primer apellido:</label>
                        <input class="form-control form-control-sm" type="text" placeholder="Ingrese el primer apellido"
                            required name="pApellido">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Segundo apellido:</label>
                        <input class="form-control form-control-sm" type="text"
                            placeholder="Ingrese el segundo apellido" required name="sApellido">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Numero de telefono:</label>
                        <input class="form-control form-control-sm" type="text"
                            placeholder="Ingrese el numero de telefono" required name="nTelefono">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Direccion:</label>
                        <input class="form-control form-control-sm" type="text"
                            placeholder="Ingrese la direccion del domicilio" required name="direccion">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Referencia Geografica</label>
                        <input class="form-control form-control-sm" type="text"
                            placeholder="Descripcion de como llegar al domicilio, color de casa, etc" required
                            name="refGeografica">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Comunidad:</label>
                        <input class="form-control form-control-sm" type="text" placeholder="Comunidad donde recide" value="${comunidad}"
                            readonly name="comunidad">
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationDefault01">Fecha de nacimiento:</label>
                            <input type="date" class="form-control form-control-sm" required name="fechNacimiento">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="exampleInputText">Edad:</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Ingrese la edad"
                                required name="edad">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="exampleInputEmail1">Nombre de Usuario:</label>
                            <input type="text" class="form-control form-control-sm"
                                placeholder="Ingrese un nombre de usuario" autocomplete="off" required name="nUsuario">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="exampleInputEmail1">Contraseña:</label>
                            <input type="password" class="form-control form-control-sm"
                                placeholder="Ingrese una contraseña" autocomplete="new-password" required
                                name="contrasenia">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationDefault04">Tipo de usuario:</label>
                            <select class="form-select" required name="tipoUsuario">
                            <option selected disabled value>Seleccione una opcion</option>
                            ${html}
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
   `;
}
//function rellenarmodal() {
//    datos = new FormData();
//    datos.append("accion", "editarSocio");
//    datos.append("id_comunero", id_comunero);
//    fetch('../Controles', {
//        method: 'POST',
//        body: datos
//    }).then(res => res.json())
//            .then(data => {
//                if (data.error === 'error') {
//                    swal("¡Error!", "No se a podido cargar lo datos", "error");
//                } else if (data.cedula.length > 0) {
//                    //asiganmos los datos a una variable global para almacenar los datos obtenidos del servidor y poder usarlos en todo el documento js
//                    json_comunero = data;
//                    cargarmodal();
//
//                }
//            });
//}
//;
///*Esta funcion se encarga de mostrar el modal y rellenar*/
//function mostrarModal() {
//    $('#staticBackdrop').modal("show");
//}
//;
//
//function rellenarListaTipoUsuario(HTMLSelectElement, pk_tipousuario) {
//    datos = new FormData();
//    datos.append("accion", "listarTipoUsuarios");
//    fetch('../Controles', {
//        method: 'POST',
//        body: datos
//    }).then(res => res.json())
//            .then(data => {
//                HTMLSelectElement.innerHTML = '';
//                HTMLSelectElement.innerHTML = `<option selected disabled value="">Seleccione una opcion</option>`;
//                //recorremos el json para rellenar la lista de opciones
//                for (let item of data) {
//                    if (item.error === "error") {
//                        swal("Good job!", "You clicked the button!", "error");
//                        break;
//                    } else if (item.tipo_usuario.length > 0) {
//                        HTMLSelectElement.innerHTML += `<option value="${item.pk_tipousuario}">${item.tipo_usuario}</option>`;
//                    }
//                }
//                HTMLSelectElement.value = pk_tipousuario;
//            });
//
//}
//;
//
//function GuardarActualizarEliminarSocio(e) {
//    var refFRMRegEdit = document.getElementById("frmRESocios");
//    var datos;
//    if (accion !== "Eliminar") {
//        e.preventDefault();
//        datos = new FormData(refFRMRegEdit);
//    } else {
//        datos = new FormData();
//    }
//    datos.append("accion", accion);
//    datos.append("pk_comuner", id_comunero);
//
//    fetch('../Controles', {
//        method: 'POST',
//        body: datos
//    }).then(response => response.json())
//            .catch(error => {
//                swal("¡Error!", "Ocurrio un problema mientras se procesaba la peticion", {
//                    icon: "error",
//                    dangerMode: true,
//                    timer: 5000,
//                    button: {
//                        text: "Cerrar"
//                    }
//                });
//                console.error('Error:', error);
//            })
//            .then(response => {
//                if (response.message === "Completado") {
//
//                    swal("¡Accion completada con exito!", {
//                        icon: "success",
//                        timer: 2000,
//                        button: {
//                            text: "Aceptar"
//                        }
//                    });
//                    $('#contenido').load("TablaProyectoAguaJquery/tabla.html", llenarDatatable());
//                } else if (response.message === "Error") {
//                    if (accion === "Guardar") {
//                        swal("¡Accion no completada!", "No se a podido guardar los datos correctamente", {
//                            icon: "error",
//                            dangerMode: true,
//                            timer: 5000,
//                            button: {
//                                text: "Cerrar"
//                            }
//                        });
//
//                    } else if (accion === "Actualizar") {
//                        swal("¡Accion no completada!", "No se a podido actualizar los datos correctamente", {
//                            icon: "error",
//                            dangerMode: true,
//                            timer: 5000,
//                            button: {
//                                text: "Cerrar"
//                            }
//                        });
//                    } else if (accion === "Eliminar") {
//                        /*aqui se ejecuta cualquier cosa en caso de aber dado en aceptar */
//                        swal("¡Accion no completada!", "No se ha podido eliminar los registros", {
//                            dangerMode: true,
//                            icon: "error",
//                            timer: 5000,
//                            button: {
//                                text: "Aceptar"
//                            }
//                        });
//
//                    }
//
//                }
//            });
//}
//;
