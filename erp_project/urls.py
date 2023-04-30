from django.urls import path
from .views import ProductCreateAPIView, ProductListAPIView

urlpatterns = [
    path('products/create/', ProductCreateAPIView.as_view(), name='product-create'),
    path('products/list/', ProductListAPIView.as_view(), name='product-list'),
]

