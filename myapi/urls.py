from django.urls import path
from . import views

#from rest_framework.routers import SimpleRouter
from rest_framework import routers

urlpatterns = [
    path('myapi/', views.PostView.as_view(), name= 'myapi_list'),
]

'''
router = routers.DefaultRouter()
router.register("api/myapi", PostView, "myapi")

urlpatterns = router.urls


urlpatterns = [
    path('api/myapi/', views.MyapiViewSet.as_view() ),
]
'''