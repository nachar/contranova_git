angular.module('myApp', []).controller('formulario', function($scope) {

	$scope.valNombre = function(val){
		jQuery('#nombreError').html('');
		$("#nombre").removeClass("fXInputBackgroundError");
		$(".formButton").removeClass("disabled");
		if (val == null) {
			$('#nombreError').append("Es necesario que ingrese este campo");
			$("#nombre").addClass("fXInputBackgroundError");
			$(".formButton").addClass("disabled");
		} else if (val.length < 3){
			$('#nombreError').append("Debe contener 3 o más letras");
			$("#nombre").addClass("fXInputBackgroundError");
			$(".formButton").addClass("disabled");
		} else if(val.length > 30) {
			$('#nombreError').append("Debe contener menos de 30 letras");
			$("#nombre").addClass("fXInputBackgroundError");
			$(".formButton").addClass("disabled");
		}
	};
	$scope.valTelefono = function(val){
		jQuery('#telefonoError').html('');
		$("#telefono").removeClass("fXInputBackgroundError");
		$(".formButton").removeClass("disabled");
		if (val == null) {
			$('#numeroError').append("Es necesario que ingrese este campo");
			$("#numero").addClass("fXInputBackgroundError");
			$(".formButton").addClass("disabled");
		}else if (isNaN(val)){
			$('#telefonoError').append("No es un número");
			$("#telefono").addClass("fXInputBackgroundError");
			$(".formButton").addClass("disabled");
		} else if(val.length != 8) {
			$('#telefonoError').append("Debe contener 8 numeros");
			$("#telefono").addClass("fXInputBackgroundError");
			$(".formButton").addClass("disabled");
		}
	};
	$scope.valMail = function(val){
		jQuery('#mailError').html('');
		$("#mail").removeClass("fXInputBackgroundError");
		$(".formButton").removeClass("disabled");
		if (val == null) {
			$('#mailError').append("Es necesario que ingrese este campo");
			$("#mail").addClass("fXInputBackgroundError");
			$(".formButton").addClass("disabled");
		}else if (!isValidEmailAddress(val)) {
			$('#mailError').append("Ingrese un E-mail válido");
			$("#mail").addClass("fXInputBackgroundError");
			$(".formButton").addClass("disabled"); 
		}

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
			return pattern.test(emailAddress);
		};
	};


});