from django.http import HttpResponse, HttpResponseForbidden
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
from django.utils.encoding import force_bytes

import json

from subprocess import run

import requests
from ipaddress import ip_address, ip_network

import hmac
from hashlib import sha1

def index(request, url='root'):
    template = loader.get_template('index.html')
    print(url);
    context = {
        'url': url,
    }
    return HttpResponse(template.render(context, request))

@csrf_exempt
def update(request):
    key = json.load(open('config.json', 'r'))['django_secret']

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
        return HttpResponseForbidden('Permission denied.')

    run(("cd ../ && " +
         "rm -r static/ && " +
         "npm run build && " +
         "python3 portfolio/manage.py collectstatic && " +
         "apachectl -k restart && " +
         "cd portfolio/").split(' '))

    return HttpResponse("success")
