<?php
function printNumbers($start, $end) {
    for ($i = $start; $i <= $end; $i++) {
        echo $i . "<br>";
    }
}

echo "Числа от 1 до 10:<br>";
printNumbers(1, 10);
?>
