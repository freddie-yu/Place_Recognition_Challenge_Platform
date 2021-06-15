from django.urls import path
from .api import MyapiViewSet

#from rest_framework.routers import SimpleRouter
from rest_framework import routers

#router = SimpleRouter()
router = routers.DefaultRouter()
router.register("myapi", MyapiViewSet, "myapi")

urlpatterns = router.urls

'''
urlpatterns = [
    path('api/myapi/', views.MyapiViewSet.as_view() ),
]
'''