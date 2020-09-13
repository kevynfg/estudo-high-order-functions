from classes.Contas import Conta
from classes.Clientes import Cliente

cliente1 = Cliente(123, "Kevyn", "Rua 1")
cliente2 = Cliente(345, "Mary", "Rua 2")

cliente1 = Conta([cliente1, cliente2], 1, 0)(1)

cliente1.gerarsaldo()
cliente1.depositar(1500)
cliente1.sacar(500)
cliente1.gerarsaldo()
