print("Hello World")



#importar função do próprio Python
import math, random, smtplib, time, tkinter

#Operações matemáticas e random
raizquadrada = math.sqrt(5)
fatorial = math.factorial(10)
print(fatorial)
print(raizquadrada)
print(random.randrange(20)) #gera um número aleatorio de 0 a 19
print(random.uniform(0.0, 10.0)) #gera floats aleatórios entre um e outro
print(random.choice(['vitória', 'derrota', 'empate'])) #escolhe um elemento aleatório
baralho = 'ás dois três quatro cinco seis sete oito nove dez valete dama rei'.split()
random.shuffle(baralho) #embaralha uma lista []
print(baralho) 

#Time
tempoLocal = time.ctime() #Se passar o valor, ele calcula o numero de segundos passados desde  00:00:00 do dia 1 de janeiro de 1970.
print(tempoLocal)

