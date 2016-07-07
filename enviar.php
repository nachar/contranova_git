<?php
    	if($_POST["submit"]) {
    		$recipient="contacto@contranova.cl";
    		$subject="Cotizacion";
    		$sender=$_POST["nombre"];
    		$senderEmail=$_POST["mail"];
    		$senderTelefono=$_POST["telefono"];
    		$senderTipoEvento=$_POST["tipoEvento"];
    		$senderFecha=$_POST["fecha"];
    		$senderLugar=$_POST["lugar"];
            $senderComo=$_POST["como"];
    		$message=$_POST["comentarios"];   

    		$mailBody="Contenido del Mail enviado desde www.contranova.cl\n\n
            Nombre: $sender\n\n
            Email: $senderEmail\n\n
    		Telefono: $senderTelefono\n\n
    		Tipo Evento: $senderTipoEvento\n\n
    		Fecha: $senderFecha\n\n
    		Lugar: $senderLugar\n\n
            El usuario supo de contranova por medio de: $senderComo\n\n
    		Mensaje: $message";

    		mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    		$thankYou="<p>Thank you! Your message has been sent.</p>";

            header('Location: submitReady.html');
    	}
			

?>