import threading
import time


def funcao(mensagem):
    for i in range(3):
        print('Iniciando o programa!')
        print(i, mensagem)
        time.sleep(1)  # aguarda um tempo antes de executar novamente
        print('Finalizando o programa!')


# onde args=('Executando') é o parâmetro passado na função que vai ser a mensagem exibida
threading.Thread(target=funcao, args=('Executando',)).start()
