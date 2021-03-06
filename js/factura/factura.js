export function factura(){
    let $factura=document.createElement("div");
    $factura.id ="contenidoFactura";
    $factura.innerHTML =` <div id="encabezadoFactura">
            <div id="imagen">
                <img src="/img/factura/alapaca.jpg" alt="alpaca">
            </div>
            <div id="titleencabezadoFactura">
                <div id="tituloEncabesado">
                    COMUNIDAD SAN ISIDRO DE CAJAS
                </div>
                <div id="textoTitle">
                    Consejo de Desarrollo de Nacionalidades y Pueblos del Ecuador
                </div>
                <div id="acuerdo">
                    Acuerdo N°256,20 de Septiembre del 2006
                </div>
                <div id="direccionTitle">
                    DIR:CALLE PANAMERICANA NORTE NRO SN
                </div>
                <div id="direccionTitlecity">
                    AYORA -CAYAMBE PROV.PICHINCHA
                </div>
            </div>
            <div id="numFactura">
                <div id="numeralFactura">
                    <div class="form-group" id="numfacturaTitle">
                        <label for="TitlenumFactura">FACTURA</label>
                        <input type="text" class="form-control-plaintext" id="TitlenumFactura" value="000000" disabled>
                    </div>
                </div>
                <div id="numeralRuc">
                    <div class="form-group row">
                        <label for="staticRuc" class="col-sm-3 col-form-label">RUC:</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control-plaintext" id="staticRuc" value="000000" disabled="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="detallesCliente">
            <div class="row" id="detalleCliente">
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">USUARIO:</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control-plaintext" value="APELLIDOS Y NOMBRES">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-7 col-form-label">Fecha de Facturación:</label>
                        <div class="col-sm-5">
                            <input type="date" disabled class="form-control-plaintext" value="2020-01-29">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="detalleCliente">
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">RUC/CI:</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control-plaintext" value="0000000000">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Dirección:</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control-plaintext" value="SAN ISIDRO DE CAJAS">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="detalleCliente">
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Telefono:</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control-plaintext" value="0995883099">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Medidor:</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control-plaintext" value="000000">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="detalleCliente">
                <div class="col-md-6" id="fechaConsumo">
                    <div class="form-group">
                        <label for="formGroupExampleInput">Fecha de lectura</label>
                        <input type="date" class="form-control-plaintext" id="formGroupExampleInput" value="2021-02-02"
                            disabled>
                    </div>
                </div>
                <div class="col-md-6" id="fechaConsumo">
                    <div class="form-group">
                        <label for="formGroupExampleInput">Fecha limite de pago:</label>
                        <input type="date" class="form-control-plaintext" id="formGroupExampleInput" value="2021-02-02"
                            disabled>
                    </div>
                </div>
            </div>
            <div class="row" id="detalleCliente">
                <div class="col-md-6" id="dataLectura">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-4 col-form-label">L. Anterior:</label>
                        <div class="col-sm-8">
                            <input type="text" disabled class="form-control-plaintext" value="0000">
                        </div>
                    </div>
                </div>
                <div class="col-md-6" id="dataLectura">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-4 col-form-label">L. Actual:</label>
                        <div class="col-sm-8">
                            <input type="text" disabled class="form-control-plaintext" value="0000">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="detalleCliente">
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-6 col-form-label">Tipo de Consumo:</label>
                        <div class="col-sm-6">
                            <input type="text" disabled class="form-control-plaintext" value="Industrial">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Consumo:</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control-plaintext" value="0000">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="detallePago">
            <div id="titledetallePago">
                DETALLE
            </div>
            <div class="row" id="curpodetallePago">
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">Tarifa
                        Básica:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">SubTotal:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">Tarifa
                        Ambiente:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm"
                        class="col-sm-10 col-form-label col-form-label-sm">Alcantarillado:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">Tipo de
                        Multa:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">Dias de
                        retraso:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">Total Multa:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">Total a
                        pagar:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">Total pagado:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">Deposito:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-10 col-form-label col-form-label-sm">Cambio:</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control-plaintext form-control-sm" value="00.00" disabled>
                    </div>
                </div>
            </div>
            <div class="row" id="firmas">
                <div class="col">
                    <input type="text" class="form-control" value="F) Autorizo" disabled>
                </div>
                <div class="col">
                    <input type="text" class="form-control" value="F) Cliente" disabled>
                </div>
            </div>
        </div>`;
        return $factura;
}