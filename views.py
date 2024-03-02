# books/views.py

from django.shortcuts import render
from django.http import JsonResponse
from .models import Book
from django.views.decorators.csrf import csrf_exempt


def add_book(request):
    if request.method == 'POST':
        id = request.POST.get('id')
        title = request.POST.get('title')
        author = request.POST.get('author')
        book = Book(id=id, title=title, author=author)
        book.save()
        return JsonResponse({'message': 'Book added successfully!'})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed!'}, status=405)
