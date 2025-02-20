from django.urls import path
from .views import ToDoCreate, ToDoUpdateDelete, frontend

urlpatterns = [
    path("", frontend, name="frontend"),
    path("api/todos/", ToDoCreate.as_view(), name="todo-create"),  # List and Create
    path("api/todos/<int:pk>/", ToDoUpdateDelete.as_view(), name="todo-update-delete"),  # Update/Delete
]
