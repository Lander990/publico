function cargarUser() {
	if (sessionStorage.getItem("nomUser") !== null) {
	$("#vacio").css("display","inherit");
	document.getElementById('vacio').innerHTML = "Perfil de " + sessionStorage.getItem("nomUser");
	$("#vacio").css("border","1px solid");
	$("#vacio").css("border-color","white");
	$(".zona-anuncios").css("display","none");
}
}

function logout() {
	sessionStorage.removeItem("nomUser");
	window.alert("Logout con exito!");
	$("#vacio").css("display","none");
	$(".zona-anuncios").css("display","inherit");
}
