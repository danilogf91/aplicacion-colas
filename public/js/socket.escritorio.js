var socket = io();
var label = $('h1');


var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var labelSmall = $('small');


console.log(escritorio);
label.text('Escritorio ' + escritorio);


$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay tickets') {
            labelSmall.text(resp);
            alert(resp);
            return;
        }

        labelSmall.text('Ticket ' + resp.numero);
    });
});