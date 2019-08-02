from django.urls import include, path
from . import views

urlpatterns = [
    path('login', views.login),
    path('home', views.home),
    path('', views.home)
]