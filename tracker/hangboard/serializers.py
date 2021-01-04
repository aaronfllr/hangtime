from rest_framework import serializers
from .models import Tensionblock

class TensionblockSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tensionblock
        fields = ('pk', 'name','hold', 'fingers_used', 'grip_used', 'weight', 'duration')
