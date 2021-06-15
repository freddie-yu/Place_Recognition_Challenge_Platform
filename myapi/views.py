'''
from django.shortcuts import render
from django.shortcuts import HttpResponse
import pymysql
from .models import Docker
from .models import Leaderboardhistory
from .models import User
from .serializers import MyapiSerializer
from rest_framework import generics
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny


class MyapiViewSet(ModelViewSet):
    queryset = Docker.objects.all()
    serializer_class = MyapiSerializer
    permission_classes = [AllowAny]
    '''
