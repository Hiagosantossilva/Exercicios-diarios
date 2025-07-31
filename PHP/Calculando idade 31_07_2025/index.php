<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Descubra a sua idade</h1>
    <form method="post">
        <input type="number" name = "anoNascimento" placeholder="Digite o seu ano de nascimento" required> <br>
        <input type="submit" name="botao" value="Clique aqui">
    </form>

    <?php
        function calcularIdade(){
            $anoNasc = $_POST['anoNascimento'];
            $calc =  $anoNasc - date('Y');
            echo "<h2>Sua idade é: $calc anos</h2>";    
        }
        if (isset($_POST['botao'])) {
            calcularIdade();
        }
    ?>
</body>
</html>