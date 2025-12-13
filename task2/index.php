<?php
$num1 = 7;
$num2 = 5;

$sum = $num1 + $num2;

echo "Число 1: $num1<br>";
echo "Число 2: $num2<br>";
echo "Сумма: $sum<br>";

if ($sum % 2 == 0) {
    echo "Сумма является четным числом";
} else {
    echo "Сумма является нечетным числом";
}
?>
