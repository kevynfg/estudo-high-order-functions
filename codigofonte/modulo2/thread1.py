import threading
import time


def funcao():
    for i in range(3):
        print('Iniciando o programa!')
        print(i, 'Executando a thread!')
        time.sleep(1)  # aguarda um tempo antes de executar novamente
        print('Finalizando o programa!')


threading.Thread(target=funcao).start()
