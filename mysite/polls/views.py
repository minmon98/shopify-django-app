from django.shortcuts import render
import requests

# Create your views here.
def login(request):
    return render(request, "login.html", {})

def home(request):
    url = "https://" + request.GET.get("shop") + "/admin/oauth/access_token"
    code = request.GET.get("code")
    API_KEY = "fa0170cc042e3e2888092b7e79024df9"
    API_SECRET_KEY = "c89e9f4c6e39183abb2b31d9ee76ce1c"
    data = {
        "client_id": API_KEY,
        "client_secret": API_SECRET_KEY,
        "code": code
    }
    r = requests.post(url = url, data = data)
    print(r.text)
    return render(request, "home.html", {})