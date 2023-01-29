from django.conf import settings
from django.db import models
from django.core.files.storage import FileSystemStorage

fs = FileSystemStorage(location='./data/menu')


class Menu(models.Model):
    id = models.BigAutoField(help_text="Menu ID", primary_key=True)
    menu_name = models.CharField(max_length=200)
    price = models.IntegerField()
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.menu_name


class MenuDetail(models.Model):
    id = models.BigAutoField(help_text="Menu Detail ID", primary_key=True)
    menu_id = models.ForeignKey("Menu", related_name="menu", on_delete=models.CASCADE, db_column="menu_id")
    count = models.IntegerField()
    image_url = models.ImageField(storage=fs)
    nutrition = models.TextField()
    text = models.TextField()
