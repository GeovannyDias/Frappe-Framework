# Copyright (c) 2021, orlando Cholota and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class representante(Document):
	def before_insert(self):
		self.newMatricula()

	def validate(self):
		self.validateMatricula()

	def newMatricula(self):
		id_representante = self.cedula
		if id_representante:
			total_hijos = len(self.estudiante)
			precio_unitario = 60.50
			a_pagar = 0
			descuento = 0 # 10% 20%
			total_a_pagar = 0
			if(total_hijos==1):
				descuento = 0
				a_pagar = precio_unitario * total_hijos
				total_a_pagar = a_pagar
			elif (total_hijos == 2):
				descuento = 10
				a_pagar = precio_unitario * total_hijos
				des = a_pagar * (descuento / 100)
				total_a_pagar = a_pagar - des
			elif (total_hijos > 2):
				descuento = 20
				a_pagar = precio_unitario * total_hijos
				des = a_pagar * (descuento / 100)
				total_a_pagar = a_pagar - des
			else:
				frappe.throw("Debe registrar estudiantes para generar matrícula")
				
			doc = frappe.get_doc({
				'doctype': 'matricula',
				'id_representante': id_representante,
				'total_hijos': total_hijos,
				'precio_unitario': precio_unitario,
				'a_pagar': a_pagar,
				'descuento': descuento,
				'total_a_pagar': total_a_pagar
			})
			doc.insert()


	def validateMatricula(self):
		id_representante = self.cedula
		matricula = frappe.get_doc("matricula", id_representante)
		if matricula:
			total_hijos = len(self.estudiante)
			precio_unitario = 60.50
			a_pagar = 0
			descuento = 0 # 10% 20%
			total_a_pagar = 0
			if(total_hijos==1):
				descuento = 0
				a_pagar = precio_unitario * total_hijos
				total_a_pagar = a_pagar
			elif (total_hijos == 2):
				descuento = 10
				a_pagar = precio_unitario * total_hijos
				des = a_pagar * (descuento / 100)
				total_a_pagar = a_pagar - des
			elif (total_hijos > 2):
				descuento = 20
				a_pagar = precio_unitario * total_hijos
				des = a_pagar * (descuento / 100)
				total_a_pagar = a_pagar - des
			else:
				frappe.throw("Debe registrar estudiantes para generar matrícula")
				
			matricula.total_hijos = total_hijos,
			matricula.precio_unitario = precio_unitario,
			matricula.a_pagar = a_pagar,
			matricula.descuento = descuento,
			matricula.total_a_pagar = total_a_pagar

			matricula.save()
		else:
			frappe.throw("No se encontro matrícula registrada")
			
