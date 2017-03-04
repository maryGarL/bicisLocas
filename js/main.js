function validateForm(){
	var nombre= document.getElementById('name');
	var apellido= document.getElementById('lastname');
	var email= document.getElementById('input-email');
	var pasword=document.getElementById('input-password')
	var characterAllowed = /^[a-zA-Z]+$/;

	if(nombre.value.length == 0 ){
		alert("Ingresa tu Nombre");
	}
	else if(){
		alert("Solo vamos a aceptar letras!");
	}
	else if(nombre.value.charAt(0) != nombre.value.charAt(0).toUpperCase()){
		alert("Tu Nombre Debe comenzar con Mayúscula");
	}
	/*
	if((nombre.value=="")||(expreRegular.test(nombre.value)==false)||(nombre.value.toString().charAt(0).toUpperCase()+nombre.value.toString().slice(1).toLowerCase()==false)){
		alert("Ingrese correctamente su nombre");
	};
	if((apellido.value=="")||((expreRegular.test(apellido.value)==false)||(apellido.value.toString().charAt(0).toUpperCase()+apellido.value.toString().slice(1).toLowerCase()==false))){
		alert("Ingrese correctamente su apellido");
	};
	if(email.value==""){
		alert("Ingreso correctamente su apellido");
	};
	if((pasword.value=="")||(pasword.value.length>=7)||( pasword.value=="password")||(pasword.value=="123456")||(pasword.value=="098754")){
		alert("Ingreso correctamente su contraseña");
	}*/
}
