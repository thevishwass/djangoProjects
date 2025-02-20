from rest_framework import serializers
from .models import ToDoApp

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoApp
        fields = '__all__'