from rest_framework import serializers
from . import models

class MyapiSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Docker
        fields = ('docker_id', 'name', 'algorithm_name', 'create_date', 'delete_date', 'memory_consumption', 'accuracy', 'execution_time',)

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = '__all__'


