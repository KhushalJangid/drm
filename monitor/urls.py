from django.urls import path
from monitor import views

urlpatterns = [
    path('r/',views.resources),
    path('p/',views.process),
    path('c/',views.get_cpu_info),
    path('m/',views.get_memory_info),
    path('d/',views.get_disk_info),
]