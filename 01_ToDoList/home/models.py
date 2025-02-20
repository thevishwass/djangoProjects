from django.db import models # type: ignore

# Create your models here.
class ToDoApp(models.Model):
    title = models.CharField(max_length=30)
    desc = models.CharField(max_length=60)
    isDone = models.BooleanField(default= False)
    time = models.TimeField(auto_now_add = True)


    def __str__(self):
        return self.title
