from django.db import models


class Group(models.Model):
    id = models.PositiveSmallIntegerField(help_text="Group ID", primary_key=True)
    tables_in_group = models.JSONField(default='{}')

    def __int__(self):
        return self.id
