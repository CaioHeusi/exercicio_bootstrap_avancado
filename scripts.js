$(document).ready(function(){
    $('.carousel').carousel({
        interval: 3000
    });

    $('#phone').mask('(00) 00000-0000');

    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var form = $(this)[0];
        if (form.checkValidity() === false) {
            if (!$('#terms').is(':checked')) {
                $('#termsAlert').removeClass('d-none');
            }
            $(this).addClass('was-validated');
        } else {
            alert('Formulário enviado com sucesso!');
            this.reset();
            $(this).removeClass('was-validated');
            $('#termsAlert').addClass('d-none');
        }
    });

    $('#terms').on('change', function() {
        if ($(this).is(':checked')) {
            $('#termsAlert').addClass('d-none');
        }
    });
});
