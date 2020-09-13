from .ContaComum import ContaComum
from .ContaRemunerada import ContaRemunerada
from .ContaCliente import ContaCliente


class Banco():
    def __init__(self, codigo, nome):
        self.codigo = codigo
        self.nome = nome
        self.contas = []

    def adicionaconta(self, contacliente):
        self.contas.append(contacliente)

    def calcularedimentomensal(self):
        for c in self.contas:
            c.CalculoRedimento()

        def imprimesaldocontas(self):

            for c in self.contas:
                banco1 = Banco(999, "teste")
                contacliente1 = ContaCliente(1, 0.01, 0.1, 1000, 0.05)
                contacomum1 = ContaComum(2, 0.01, 0.1, 2000, 0.05)
                contaremunerada1 = ContaRemunerada(3, 0.01, 0.1, 2000, 0.05)
                banco1.adicionaconta(contacliente1)
                banco1.adicionaconta(contacomum1)
