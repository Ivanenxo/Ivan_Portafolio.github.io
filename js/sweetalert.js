function noticontact() {
    Swal.fire({
        icon: 'info',
        title: 'Contacto',
        html: '<i class="bi bi-whatsapp" style="color:green"></i><h1>Whatsapp</h1> <p>+57 3017988451</p> <i class="bi bi-envelope" style="color:#2271b3"></i> <h1>Email</h1> <p>ivanandres26@hotmail.es</p>',
        customClass: {
            popup: 'transparent-alert' // Aquí es donde asignamos la clase personalizada
        }
    });
}

