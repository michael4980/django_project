import string
import random
from django.shortcuts import render
from django.http import HttpResponse


def get_pasword(request):
    
    letters = list(string.ascii_lowercase)
    if request.GET.get('uppercase'):
        letters.extend(list(string.ascii_uppercase))
    if request.GET.get('numbers'):
        letters.extend(list('0123456789'))
    if request.GET.get('special'):
        letters.extend(list('!@#$%^&*()_+-'))
    length = int(request.GET.get('length', 12))
    result = ""
    for _ in range(length):
        result += random.choice(letters)
    
    return render(request, 'generator/password.html', {'password':result})

def home(request):
    context = {
        "data" : [6, 7, 8, 9, 10, 11, 12],
    }
    return render(request, 'generator/home.html', context)

def get_description(request):
    return render(request, 'generator/description.html')