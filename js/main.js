function validateForm(){
	var nombre= document.getElementById('name');
	var apellido= document.getElementById('lastname');
	var email= document.getElementById('input-email');
	var pasword=document.getElementById('input-password')
	var characterAllowed = /^[a-zA-Z]+$/;

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

	if(email.value==""){
		alert("Ingrese su email");
	};
	if((pasword.value=="")||(pasword.value.length>=7)||( pasword.value=="password")||(pasword.value=="123456")||(pasword.value=="098754")){
		alert("Ingreso correctamente su contraseña");
	}
}
