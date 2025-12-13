<?php
$result = null;
$error = null;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST["num1"];
    $num2 = $_POST["num2"];
    $operation = $_POST["operation"];

    switch ($operation) {
        case "add":
            $result = $num1 + $num2;
            break;
        case "subtract":
            $result = $num1 - $num2;
            break;
        case "multiply":
            $result = $num1 * $num2;
            break;
        case "divide":
            if ($num2 == 0) {
                $error = "Ошибка: деление на ноль невозможно!";
            } else {
                $result = $num1 / $num2;
            }
            break;
    }
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Калькулятор</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #fff; color: #000; }
        form { margin-bottom: 20px; }
        input, select, button { padding: 10px; margin: 5px; font-size: 16px; }
        button { background: #000; color: #fff; border: none; cursor: pointer; }
        .result { font-size: 20px; font-weight: bold; }
        .error { color: #000; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Калькулятор</h1>
    <form action="" method="post">
        <input type="number" name="num1" placeholder="Первое число" required step="any">
        <select name="operation" required>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
        </select>
        <input type="number" name="num2" placeholder="Второе число" required step="any">
        <button type="submit">Вычислить</button>
    </form>

    <?php if ($error): ?>
        <p class="error"><?php echo $error; ?></p>
    <?php elseif ($result !== null): ?>
        <p class="result">Результат: <?php echo $result; ?></p>
    <?php endif; ?>
</body>
</html>
