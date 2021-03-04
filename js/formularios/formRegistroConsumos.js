export function formRegistroConsumos(LimiteDias) {
    let fechas = new Date(),
        fecha = new Date(),
        fechalimite = sumarDias(fechas, LimiteDias.LimiteDias),/*enviamos la fechaactual y el numero de dias a una funcion para que a la fecha
        actual le sume unos dias */
        anio = fechalimite.getFullYear(),
        mes = fechalimite.getMonth() + 1,
        dia = fechalimite.getDate(),
        anioActual = fecha.getFullYear(),
        mesActual = fecha.getMonth() + 1,
        diaActual = fecha.getDate();
    if (dia < 10) {
        dia = '0' + dia;
    } //agrega cero si el menor de 10
    if (mes < 10) {
        mes = '0' + mes;
    } //agrega cero si el menor de 10

    if (diaActual < 10) {
        diaActual = '0' + diaActual;
    } //agrega cero si el menor de 10
    if (mesActual < 10) {
        mesActual = '0' + mesActual;
    } //agrega cero si el menor de 10

    let fechalimiteFormat = anio + "-" + mes + "-" + dia,
        fechaActual = anioActual + "-" + mesActual + "-" + diaActual;

    let $formRegistroConsumos = document.createElement("div");
    $formRegistroConsumos.id = "form";
    $formRegistroConsumos.innerHTML = `
   <form id="frmREConsumo">
        <div class="row flex-container">
            <div>
                <input class="form-control" type="search" placeholder="Buscar...">
            </div>
            <div>
                <input class="btn btn-primary" type="button" value="Buscar" id="btnRC_buscarConsumo">
            </div>
        </div>
        <div class="contenidoform">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Cedula:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese la cedula" required
                    name="cedula" disabled>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Nombres y apellidos:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Nombres y apellidos" required
                    name="nombreApellidos" disabled>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationDefault04" class="text-light form-label ">Numero de medidor:</label>
                    <select class="form-select" id="validationDefault04" required name="numMedidor">
                        <option selected disabled value>Selecione un medidor</option>
                    </select>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Lectura anterior:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese la lectura anterior"
                    required name="lecturaAnterior" readonly>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Lectura actual:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese la lectura actual" required
                    name="lecturaActual" disabled>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Consumo total m3:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el consumo en m3" required
                    name="conumoCubico" readonly>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationDefault05" class="text-light form-label ">Tipo de consumo:</label>
                    <select class="form-select" id="validationDefault05" required name="tipoConsumo" readonly>
                        <option selected disabled value>Selecione un tipo de consumo</option>
                    </select>
                </div>
            </div>
            <div class="mb-3">
                <div class="col-md-6 mb-3">
                    <label for="validationDefault01" class="text-light form-label ">Fecha de registro:</label>
                    <input type="date" class="form-control form-control-sm" value="${fechaActual}" name="fechaRegistro" required readonly>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationDefault01" class="text-light form-label ">Fecha limite de pago:</label>
                    <input type="date" class="form-control form-control-sm" value="${fechalimiteFormat}"  name="fechaLimite" required readonly>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Total a pagar:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el total a pagar"
                    name="totalPagar" required readonly>
            </div>
            <div class="btn-group btn-group-lg" role="group" aria-label="Basic mixed styles example">
                <button type="submit" class="btn btn-danger">Guardar</button>
                <button type="button" class="btn btn-warning">Cancelar</button>
                <button type="button" class="btn btn-success">Limpiar</button>
            </div>
        </div>
    </form>
  `;
    return $formRegistroConsumos;
    function sumarDias(fecha, dias) {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
    }
}