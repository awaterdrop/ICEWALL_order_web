from django.db import models


class Order(models.Model):
    id = models.BigAutoField(help_text="Order ID", primary_key=True)
    group_id = models.ForeignKey("group.Group", related_name="order_group", on_delete=models.DO_NOTHING, db_column="group_id")
    menu_id = models.ForeignKey("menu.Menu", related_name="order_menu", on_delete=models.DO_NOTHING, db_column="menu_id")
    cooking_state = models.CharField(choices=(
            ('d', "Done"),
            ('i', "Ing"),
            ('w', "Waiting"),
        ),
        max_length=1,
        default='w'
    )
    count = models.PositiveSmallIntegerField()

    def __str__(self):
        return str(self.id)
