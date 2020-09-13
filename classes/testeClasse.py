from .Conta import Conta

c1 = Conta(1, 1, "Kevyn", 1000)
c1.depositar(300)
print(c1)
c1.sacar(100)
print(c1)
c1.sacar(100)
print(c1)

conta2 = Conta(3, 456, 'Mary', 0)

c1.transfereValor(conta2, 500)
print(c1.saldo)
print(conta2.saldo)
