from django.db import models
import os

# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=100)
    department=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)

class Meta:
    db_table="student"

    # create-Add/post
     # Get
      # update-put
       # delete
