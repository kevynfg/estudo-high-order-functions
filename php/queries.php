<?php
//MÉTODO EXEC
/*a variável $dsn, abaixo, corresponde à instação da classe PDO, inicializada na conexão com o BD*/
$qtdeLinhasAfetadas = $dsn->exec("Delete From Cliente Where codigo_cliente = 1");
echo "Quantidade de linhas afetadas: " . $qtdeLinhasAfetadas;
//O código acima é funcional e complementar ao código anterior, 
//uma vez que o método Exec deve ser invocado a partir da instância para a classe PDO (correspondente à variável $dsn em nosso código).

//MÉTODO QUERY
$instrucaoSQL = "Select nome, cpf, telefone From Cliente";
//a variável $dsn, abaixo, corresponde à instação da classe PDO, inicializada na conexão com o BD
$resultSet = $dsn->query($sql);
while ($row = $resultSet->fetch()) {
echo $row['nome'] . "\t";
echo $row['cpf'] . "\t";
echo $row['telefone'] . "\n";
}
?>