"""
from .models import Docker
from rest_framework import viewsets, permissions
from .serializers import MyapiSerializer


class MyapiViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = MyapiSerializer

    def get_queryset(self):
        return self.request.user.myapi.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
"""