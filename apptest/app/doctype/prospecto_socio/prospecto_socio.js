// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('prospecto_socio', {
	refresh: function(frm) {
		// Event refresh form
	},
	name_partner: (frm) => {
		console.log(frm.doc.name_partner);
	},
	date_birth: (frm) => {
		getDate(frm.doc.date_birth, frm);
	},
  phone(frm) {
    validatePhone(frm);
  },
  validate: (frm) => {
    let phone = frm.doc.phone;
    console.log('Validate:', frm.doc.phone);
    if (phone.match(/\d/g).length !== 10) {
      // Code
      frappe.throw('El número de teléfono debe tener 10 digitos.');
    } 
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
  function validatePhone(frm) {
    let phone = frm.doc.phone;
    // SI o SI la cadena tenga 10 catacteres
    console.log('Phone:', frm.doc.phone, phone.match(/\d/g).length === 10);
    
    if (phone.match(/\d/g).length === 10) {
      // Code
    }

    // let p1 = document.getElementById("nombre").value;  //tomamos en una variable lo ingresado en el login nombre
    let noValido = /\s/;
    if(noValido.test(phone)){ // se chequea el regex de que el string no tenga espacio
        console.log("El campo no puede contener espacios en blanco"); 
        return false; 
    } else {
        console.log("Ok");
        // frappe.show_alert('Please save form before attaching a file');
        // frappe.throw('Linked document not found');
        // frm.set_intro('Please set the value of description');

        // ROUTES
        const route = frappe.get_route();
        // ['Form', 'prospecto_socio', '1234567890']
        console.log('ROUTE:', route);
        // frappe.set_route(route[1]);
        // frappe.set_route('List/Event/Calendar');

        // ALERT

        // frappe.show_alert('Hi, you have a new message', 3);

        //show_alert with indicator
        // frappe.show_alert({
        //     message:__('Hi, you have a new message'),
        //     indicator:'green'
        // }, 5);

        return false; 
    }

    // if (frm.is_dirty()) {
    //   frappe.show_alert('Please save form before attaching a file')
    // }
  }




/*

EventName	Description

setup	Triggered once when the form is created for the first time
before_load	Triggered before the form is about to load
onload	Triggered when the form is loaded and is about to render
refresh	Triggered when the form is loaded and rendered.
onload_post_render	Triggered after the form is loaded and rendered
validate	Triggered before before_save
before_save	Triggered before save is called
after_save	Triggered after form is saved
before_submit	Triggered before submit is called
on_submit	Triggered after form is submitted
before_cancel	Triggered before cancel is called
after_cancel	Triggered after form is cancelled
timeline_refresh	Triggered after form timeline is rendered
{fieldname}_on_form_rendered	Triggered when a row is opened as a form in a Table field
{fieldname}	Triggered when the value of fieldname is changed

   */