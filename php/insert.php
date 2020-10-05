<?php
define('HOST', 'localhost');
define('PORT', '5432');
define('DBNAME', 'bdestudo');
define('USER', 'postgres');
define('PASSWORD', 'ke452366');
try {
$dsn = new PDO("mysql:host=". HOST .
";port=".PORT.";dbname=" . DBNAME . ";user=" . USER .
";password=" . PASSWORD);
} catch (PDOException $e) {
echo 'A conexão falhou e retorno a seguinte mensagem de erro: ' . $e->getMessage();
}
$nome_cliente = "jose";
$cpf_cliente = "43674817861";
$email_cliente = "email@dominio.com.br";
$data_nascimento_cliente = "1980-10-01";
$stmt = $dsn->prepare("INSERT INTO cliente(nome_cliente, cpf_cliente, email_cliente, data_nascimento_cliente) VALUES (?, ?, ?, ?)");
$resultSet = $stmt->execute([$nome_cliente, $cpf_cliente, $email_cliente, $data_nascimento_cliente]);

if($resultSet) {
  echo "Os dados foram inseridos com sucesso. \n\n";
} else {
  echo "Ocorreu um erro e não foi possível inserir os dados.";
  exit;
}
die

?>