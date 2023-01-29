from django.db import models


class Table(models.Model):
    id = models.BigAutoField(help_text="Table ID", primary_key=True)
    table_state = models.BooleanField(default=True)

    def __int__(self):
        return self.id
