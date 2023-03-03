from django.db import models


class Group(models.Model):
    id = models.PositiveSmallIntegerField(help_text="Group ID", primary_key=True)

    def __str__(self):
        return str(self.id)