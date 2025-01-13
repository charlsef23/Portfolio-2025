<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "charlsef23@icloud.com";
    $subject = "Nuevo mensaje del formulario de contacto";
    $body = "Nombre: $fullname\nEmail: $email\nMensaje: $message";
    $headers = "From: charlsef23@icloud.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por tu mensaje, te responderemos pronto.";
    } else {
        echo "Hubo un error al enviar el mensaje, por favor intenta de nuevo.";
    }
}
?>