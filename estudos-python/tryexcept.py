numerador = eval(input("Entre com o numerador da fração: "))
denominador = input("Entre com o denominador da fração: ")

try:
    print(f'A divisão vale {numerador/denominador}')

except ZeroDivisionError:
    print("Os parâmetros estão incorretos")

except:
    print("Não foi possível executar a operação.")