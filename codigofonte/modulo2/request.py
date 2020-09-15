import threading
import urllib.request
import time

# começa um timer
start = time.time()
urls = ["http://www.google.com", "http://www.Apple.com",
        "http://www.microsoft.com", "http://www.instagram.com"]


def chama_url(url):
    req = urllib.request.Request(url)
    response = urllib.request.urlopen(req)
    the_page = response.read()
    # configura o print para a primeira variável url vir primeiro
    # depois a segunda variável cair por ultimo em segundos, complemetando com S
    print("'%s\' carregado em %ss" % (url, (time.time() - start)))


threads = [threading.Thread(target=chama_url, args=(url,)) for url in urls]

# roda uma por uma thread
for thread in threads:
    thread.start()
for thread in threads:
    thread.join()

print("Tempo decorrido: %s" % (time.time() - start))
