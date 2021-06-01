function cargarUser() {
	if (sessionStorage.getItem("nomUser") !== null) {
	$("#vacio").css("display","inherit");
	document.getElementById('vacio').innerHTML = "Perfil de " + sessionStorage.getItem("nomUser");
	$("#vacio").css("border","1px solid");
	$("#vacio").css("border-color","white");

	$("#login").css("display","none");
	$("#logout").css("display","initial");
	$(".zona-anuncios").css("display","none");
}
}

function logout() {
	sessionStorage.removeItem("nomUser");
	window.alert("Logout con exito!");
	$("#vacio").css("display","none");

	$("#login").css("display","initial");
	$("#logout").css("display","none");
	$(".zona-anuncios").css("display","initial");

}

function abrirVideo()	 {
	$("#myModal").css("display","block");
}

function cerrarVideo()	{
	$("#myModal").css("display","none");
}
