function validateForm(){
	var nombre= document.getElementById('name');
	var apellido= document.getElementById('lastname');
	var email= document.getElementById('input-email');
	var pasword=document.getElementById('input-password')
	var indice = document.getElementById("form-control1")
	var characterAllowed = /^[a-zA-Z]+$/;
	var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(nombre.value.length == 0 ){
		alert("Ingresa tu Nombre");
	}
	else if(characterAllowed.test(nombre.value)== false){
		alert("Solo vamos a aceptar letras!");
	}
	else if(nombre.value.charAt(0) != nombre.value.charAt(0).toUpperCase()){
		alert("Tu Nombre Debe comenzar con Mayúscula");
	}

	if(apellido.value.length == 0 ){
		alert("Ingresa tu apellido");
	}
	else if(characterAllowed.test(apellido.value)== false){
		alert("Solo vamos a aceptar letras!");
	}
	else if(apellido.value.charAt(0) != apellido.value.charAt(0).toUpperCase()){
		alert("Tu apellido Debe comenzar con Mayúscula");
	}

	if((email.value=="")||(emailRegex.test(email.value)==false)){
		alert("Ingrese un email valido");
	};

	if((pasword.value=="")||(pasword.value.length>=7)||( pasword.value=="password")||(pasword.value=="123456")||(pasword.value=="098754")){
		alert("Ingreso correctamente su contraseña");}

if( indice.selectedIndex == null || indice.selectedIndex == 0 ) {
  alert("Seleccione una opcion");
	}
}
