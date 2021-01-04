from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import logging
from .models import Tensionblock
from .serializers import *

# Get an instance of a logger
logger = logging.getLogger(__name__)
@api_view(['GET', 'POST'])
def hang_list(request):
    if request.method == 'GET':
        data = Tensionblock.objects.all()
        serializer = TensionblockSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TensionblockSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def hang_detail(request, pk):
    try:
        hang = Tensionblock.objects.get(pk=pk)
    except Tensionblock.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = TensionblockSerializer(hang, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST), print(serializer)

    elif request.method == 'DELETE':
        hang.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
