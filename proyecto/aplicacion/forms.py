from django import forms
from .models import Vehiculos

class VehiculosFormulario (forms.ModelForm):
    class Meta:
        model = Vehiculos
        fields = ('autor','vin','patente','año_fabricacion','fecha_recepcion','marca','modelo',)