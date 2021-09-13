// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('representante', {
	refresh: function(frm) {
		console.log('Representate:', frm.doc);
	},
	fecha_nacimiento: (frm) => {
		getDate(frm.doc.fecha_nacimiento, frm);
	},
	validate: (frm) => {
    let phone1 = frm.doc.celular;
    let phone2 = frm.doc.convencional;
	let email = frm.doc.email;
	validatePhone(phone1, 'cecular');
	validatePhone(phone2, 'convencioal');
	validateEmail(email);
    
  },
  estudiante: (frm) => {
	  console.log(frm.doc);
  }
});

// GET DATE - SELECTED
  function getDate(date, frm) {
    const date_birth = +new Date(date);
    frm.doc.edad = getEdad(date_birth);
	frm.refresh_field('edad');
	// frm.refresh_fields(); // Refresca todos los campos
  }

// CALCULAR EDAD
  function getEdad(date) {
    let currentDate = new Date();
    let fechaNacimiento = new Date(date);
    let edad = currentDate.getFullYear() - fechaNacimiento.getFullYear();
    let meses = currentDate.getMonth() - fechaNacimiento.getMonth();
    if (meses < 0 || (meses === 0 && currentDate.getDate() < fechaNacimiento.getDate())) edad--; // Rango en meses y dias
    return edad;
  }

// VALIDATE PHONE 
function validatePhone(phone, tipo){
	if (phone.match(/\d/g).length != 10) {
      frappe.throw(`El número de teléfono ${tipo} debe tener 10 digitos.`);
    }
}

// VALIDATE EMAIL
function validateEmail(email){
	let emailValido = /\S+@\S+\.\S+/;
    if(!emailValido.test(email)){ // se chequea email
    	frappe.throw('El email ingresado es incorrecto, siga la siguiente estructura. Ej: correo@email.com');
    } 
}



