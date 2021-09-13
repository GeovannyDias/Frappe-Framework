# Copyright (c) 2021, orlando Cholota and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class prospecto_socio(Document):
	# Solo se ejecuta cuando se crea (inserta) un documento por primera vez
	# def before_insert(self):
	# 	frappe.throw("TEST Escriba un nombre válido.")

	def validate(self):
		# self.last_name = 'Martínez'
		self.validateName()
	
	def validateName(self):
		# self.last_name = 'Delgado'
		if len(self.name_partner) < 5:
			frappe.throw("Escriba un nombre válido. → {0}".format(self.name_partner))
		
		# Acceder a los campos de otra tabla
		# Si tiene clave primaria (PK) colocar para la busqueda y devuelve todo el registro

		# estadocivil = frappe.get_doc("estado_civil", "CASADO")
		# frappe.throw("Result: → {0}".format(estadocivil.name_estado_civil))
		# frappe.throw("Result: → {0}".format(estadocivil.codigo))

		# DOC → Si solo existe un documento registrado no es necesario colocar la PK

		# referenciasocio = frappe.get_doc("referencia_socio")
		# frappe.throw("Result: → {0}".format(referenciasocio.nombre))
		# frappe.throw("Result: → {0}".format(referenciasocio.tipo))
		











# SERVER
# Power Shell
# ssh frappe@frappe
# Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
# frappe@frappe's password:

# cd frappe-bench/
# bench restart


# https://frappeframework.com/docs/user/es/tutorial/controllers

# EVENTS

# before_insert
# validate (Antes de insertar o actualizar)
# on_update (Despues de guardar)
# on_submit (Cuando el documento es presentado como sometido o presentado)
# on_cancel
# on_trash (antes de ser eliminado)