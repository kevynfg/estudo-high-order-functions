try:
    num = eval(input("Entre com um número inteiro: "))
    print(num)
except:
    print("Entre com o valor numérico e não letras")


try:
    num = eval(input("Digite um número entre 1 e 4: "))
    print(num)
except:
    if num <= 1 or num >= 4:
    print("Só pode entre 1 até 4")



try:
    num = eval(input("Entre com um número inteiro: "))
    print(num)

except ValueError:
    print("Mensagem 1")

except IndexError:
    print("Mensagem 2")

except:
    print("Mensagem 3")



try:
    #Exemplo 1

except Exception:
    #Bloco 2

except Exception:
    #Bloco 3

...

else:
    #Bloco 2 - executado caso nenhuma exceção seja levantada

finally:
    #Bloco 3 - executado independente do que ocorrer

