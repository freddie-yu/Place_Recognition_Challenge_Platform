
from django.shortcuts import render
from django.shortcuts import HttpResponse
import pymysql
from .models import Post
from .models import Docker
from .models import Leaderboardhistory
from .models import User
from .serializers import PostSerializer
from .serializers import MyapiSerializer
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny

class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = PostSerializer(data=request.data)
        if posts_serializer.is_valid():
            #Post.accuracy = request.FILES['file'].read()[0]
            #Post.execution_time = request.FILES['file'].read()[2]
            #Post.memory_consumption = request.FILES['file'].read()[4]
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
'''
class MyapiViewSet(ModelViewSet):
    queryset = Docker.objects.all()
    serializer_class = MyapiSerializer
    permission_classes = [AllowAny]
'''

