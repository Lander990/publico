function guardarUser() {
	sessionStorage.setItem("nomUser", document.forms["Login"]["nombre"].value);
	window.history.go(-1);
}