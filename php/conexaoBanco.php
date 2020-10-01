<?php 
//Constantes(imutáveis) para armazenamento das variáveis de conexão
define('HOST', '127.0.0.1');
define('PORT', '5432');
define('DBNAME', 'test');
define('USER', 'user');
define('PASSWORD', 'psswd');
//Conectando com o banco de dados
try { 
  $dsn = new PDO("host=".HOST." port=".PORT." dbname=".DBNAME." user=".USER." password=".PASSWORD, array(PDO::ATTR_PERSISTENT => true));
  echo $dsn
} catch (PDOException $e) {
  echo 'A conexão falhou e retornou a seguinte mensagem de erro; ' .$e->getMessage();
}

// $stringConn = "host=".HOST." dbname=".DBNAME." user=".USER." password=".PASSWORD;
// $conn = pg_connect($stringConn) or die(' Ocorreu um erro e não foi possível conectar com o bando de dados.');

//Realizando uma consulta no BD
$instrucaoSQL = "Select nome, cpf, telefone from Cliente";
$result = pg_query($conn, $instrucaoSQL) or die ('Ocorreu um erro na execução da instrução: '.$instrucaoSQL);
//pg_query($dbcon, "SELECT id, nome FROM clientes");

//Imprimindo os dados da consulta
while ($row = pg_fetch_array($result)) {
  echo $row['nome'] . "\t";
  echo $row['cpf'] . "\t";
  echo $row['telefone'] . "\t";
}
//Encerrando a conexão
pg_close($conn)
//ou
$dsn = null;
?>