const languageSpanish = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "buttons": {
        "copy": "Copiar",
        "colvis": "Visibilidad"
    }
}, btnsstyleepi = [
    {
        extend: 'excelHtml5',
        text: '<img src="../../icons/tablas/sobresalir.svg" alt="excel" width="17px" height="17px">',
        titleAttr: 'Exportar a Excel',
        className: 'btn btn-success'
    },
    {
        extend: 'pdfHtml5',
        text: ' <img src="../../icons/tablas/documento.svg" alt="pdf" width="16px" height="16px">',
        titleAttr: 'Exportar a PDF',
        className: 'btn btn-danger'
    },
    {
        extend: 'print',
        text: ' <img src="../../icons/tablas/impresion.svg" alt="print" width="16px" height="16px">',
        titleAttr: 'Imprimir',
        className: 'btn btn-info'
    }
];

export function DataTable(idTable) {
   const table= $(idTable).DataTable({
       destroy: true,
        "scrollY": 300,
        "scrollX": true,
        paging: false,
        "language": languageSpanish,
        /*elementos filtrado etc */
        dom: 'fBrt',
        /*botones de impresion etc */
        buttons: btnsstyleepi
    });
    return table;
}
