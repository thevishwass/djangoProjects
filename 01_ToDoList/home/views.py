from django.shortcuts import render
from rest_framework import generics
from .models import ToDoApp
from .serializers import ToDoSerializer

# Renders the frontend
def frontend(request):
    return render(request, "index.html")

# Handles listing all tasks and creating a new one
class ToDoCreate(generics.ListCreateAPIView):
    queryset = ToDoApp.objects.all()
    serializer_class = ToDoSerializer

# Handles retrieving, updating, and deleting a single task
class ToDoUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = ToDoApp.objects.all()
    serializer_class = ToDoSerializer

