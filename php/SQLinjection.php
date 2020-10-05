<?php
//FORMA VULNERÁVEL E NÃO RECOMENDADO
//Realizando uma consulta no BD através do login e senha recebidos por POST
// $login = $_POST['login'];
// $pswd = $_POST['pswd'];
// $instrucaoSQL = "Select * From Usuario Where login = '$login' And password = '$pswd'";
// $result = mysql_query( $instrucaoSQL ) or die(' Ocorreu um erro na execução da instrução: ' . $instrucaoSQL . ' ' .
// mysql_error() );

//Utilizando Prepare e Execute para mais segurança
//Constantes para armazenamento das variáveis de conexão.
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

//Realizando uma consulta no BD através do login e senha recebidos por POST
$login = $_POST['login'];
$pswd = $_POST['pswd'];

//Primeiro Método
$stmt = $dsn->prepare("Select * From Usuario Where login = :login And password = :password");
$stmt->execute([':login' => $login, ':password' => $pswd]);
//Segundo método
// $stmt = $dsn->prepare("Select * From Usuario Where login = ? And password = ?");
// $stmt->execute([$login, $pswd]);

/*Aqui entraria o código para tratar o resultado da instrução SQL acima*/

//Destruindo o objecto statement e fechando a conexão
$stmt = null;
$dsn = null;

?>