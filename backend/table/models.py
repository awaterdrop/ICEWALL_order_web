from django.db import models


class Table(models.Model):
    id = models.PositiveSmallIntegerField(help_text="Table ID", primary_key=True)
    state = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)
