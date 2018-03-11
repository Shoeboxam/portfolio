from django.http import HttpResponse, HttpResponseForbidden
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
from django.utils.encoding import force_bytes

import requests
from ipaddress import ip_address, ip_network

import hmac
from hashlib import sha1

def index(request):
    template = loader.get_template('index.html')
    context = {
        'content': 'Hello World!',
    }
    return HttpResponse(template.render(context, request))

@csrf_exempt
def update(request):
    key = open('secret.txt', 'r').readline()[:-1]

    header = request.META.get('HTTP_X_FORWARDED_FOR')
    if not header:
        header = request.META.get('REMOTE_ADDR')
    git_ip = ip_address(u'{}'.format(header))

    whitelist = requests.get('https://api.github.com/meta').json()['hooks']

    for valid_ip in whitelist:
        if git_ip in ip_network(valid_ip):
            break;
    else:
        return HttpResponseForbidden('Permission denied for {}'.format(git_ip))

    secret = request.META.get('HTTP_X_HUB_SIGNATURE')

    if not secret:
        return HttpResponseForbidden('Permission denied.')

    sha_name, signature = secret.split('=')
    if sha_name != 'sha1':
        return HttpResponseForbidden('Permission denied.')

    mac = hmac.new(force_bytes(key), msg=force_bytes(request.body), digestmod=sha1)
    if not hmac.compare_digest(force_bytes(mac.hexdigest()), force_bytes(signature)):
        return HttpResponseForbidden('Permission denied. Invalid secret.')
    return HttpResponse("pass")
