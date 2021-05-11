function guardarUser() {
	sessionStorage.setItem("nomUser", document.forms["Login"]["nombre"].value);
	window.history.go(-1);
}

function leerXML() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open("GET", "registrados.xml", true);
  xhr.send();	
}


function miFuncion(xml) {
  var i;
  var usrNom;
  var usrPsw;
  var usuario = [];
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("usuario");
  var esCorrecto = false; //Esta variable comprobará si el usuario y la contraseñas puesta en el formulario esta en el XML
  var nomForm = document.forms["Login"]["nombre"].value; //Guarda el nombre que se ha puesto en el formulario
  var passForm = document.forms["Login"]["pwd"].value; //Guarda la contraseña que se ha puesto en el formulario

window.alert("Nombre y/o contraseña incorrectos.");
  for (i = 0; i <x.length; i++) { 
	// leo las etiquetas que me interesan del objeto
	usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
	usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

	//Compruebo si el usuario y la contraseña puesta en el formulario coincide con
	//alguno de los campos del XML
	if ((nomForm == usrNom) && (passForm == usrPsw)) {
		esCorrecto = true;
		window.alert("Nombre y/o contraseña incorrectos.");
	}


	// actualizo el array bidimensional con los usuarios registrados
	usuario = [usrNom,usrPsw];
	registrados.push(usuario);
  }

  //Si el nombre y la contraseña es correcto lo guarda en el sessionStorage y devuelve a la pagina
  if (esCorrecto == true) {
  	sessionStorage.setItem("nomUser", document.forms["Login"]["nombre"].value);
  	window.history.go(-1);
  } else {
  	//Si no es correcto mando una alerta
  	window.alert("Nombre y/o contraseña incorrectos.");
  }

  // muestro en consola el array de usuarios registrados
  return false;
}