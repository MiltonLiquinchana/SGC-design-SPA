export function formRegistroPagoAgua(){
    let fecha = new Date(),
        anioActual = fecha.getFullYear(),
        mesActual = fecha.getMonth() + 1,
        diaActual = fecha.getDate();
    if (diaActual < 10) {
        diaActual = '0' + diaActual;
    } //agrega cero si el menor de 10
    if (mesActual < 10) {
        mesActual = '0' + mesActual;
    } //agrega cero si el menor de 10
    let fechaActual = anioActual + "-" + mesActual + "-" + diaActual;
    let $formRegistroPagoAgua = document.createElement("div");
    $formRegistroPagoAgua.id = "form";
    $formRegistroPagoAgua.innerHTML = `
    <form id="frmREPagoAgua">
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
                    readonly>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Nombres y apellidos:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Nombres y apellidos" required
                    readonly>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationDefault05" class="text-light form-label ">Numero de medidor:</label>
                    <select class="form-select" id="validationDefault05" required>
                        <option selected disabled value>Seleccione un medidor</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationDefault04" class="text-light form-label ">Consumo:</label>
                    <select class="form-select" id="validationDefault04" required name="consumo">
                        <option selected disabled value>Seleccione un consumo</option>
                    </select>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Consumo total m3:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el consumo en m3" required
                    readonly>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Tipo de consumo:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el tipo de consumo"
                    required readonly>
            </div>
            <div class="mb-3">
                <div class="col-md-6 mb-3">
                    <label for="validationDefault01" class="text-light form-label ">Fecha de registro:</label>
                    <input type="date" class="form-control form-control-sm" required readonly>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationDefault01" class="text-light form-label ">Fecha limite de pago:</label>
                    <input type="date" class="form-control form-control-sm" required readonly>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationDefault01" class="text-light form-label ">Fecha registro de pago:</label>
                    <input type="date" class="form-control form-control-sm" value="${fechaActual}" required readonly>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Subtotal a pagar:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el total a pagar" required
                    readonly>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Tipo de multa:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el tipo de consumo"
                    required readonly>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Valor de multa:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el valor de la multa"
                    required readonly>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Dias de retraso:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese los dias de retraso"
                    required readonly name="diasRetraso">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Total de la multa:</label>
                <input class="form-control form-control-sm" type="text"
                    placeholder="Ingrese el valor a pagar por la multa" required readonly name="totalMulta">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Tarifa ambiente:</label>
                <input class="form-control form-control-sm" type="text"
                    placeholder="Ingrese el valor de la tarifa ambiente" required readonly>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Tarifa alcantarillado:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el tipo de consumo"
                    required readonly>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Total a pagar:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el total a pagar" required
                    readonly name="totalPagar">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Deposito en efectivo:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el total a pagar"
                    name="deposito" required>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="text-light form-label ">Cambio:</label>
                <input class="form-control form-control-sm" type="text" placeholder="Ingrese el total a pagar"
                    name="cambio" readonly required>
            </div>
          <div class="btn-group btn-group-lg" role="group" aria-label="Basic mixed styles example">
                <button type="submit" class="btn btn-danger">Guardar</button>
                <button type="button" class="btn btn-warning" disabled>Imprimir</button>
                <button type="button" class="btn btn-success">Limpiar</button>
            </div>
         </div>
    </form>
    `
    return $formRegistroPagoAgua;
}