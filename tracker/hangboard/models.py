from django.db import models

# Create your models here.

# Create your models here.
class Tensionblock(models.Model):

    hold = models.CharField(
        #choices = Tensionblock_holds,
        max_length=20,
    )
    fingers_used = models.CharField(
        #choices = Fingers,
        max_length=7,
    )
    grip_used = models.CharField(
        #choices = Grip,
        max_length=20,
    )
    weight = models.IntegerField("weight")
    duration = models.IntegerField("Duration")
    name = models.CharField("Name", max_length=240)

    def __str__(self):
        return self.name
